import supabase from "../../../shared/api/SupabaseClient"; // Changed to default import

export const SignUp = async (formData: FormData): Promise<string | null> => {
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password")).trim();
  const nickName = String(formData.get("nickName")).trim();

  // 닉네임 중복 확인
  const { data: nickNameCheck } = await supabase
    .from("user")
    .select("uid")
    .eq("nickName", nickName)
    .single();

  if (nickNameCheck) {
    return "이미 가입된 닉네임입니다";
  }

  // Auth 시스템에 사용자 등록 (이메일 중복 검사 포함)
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (error.message.includes("Email already registered")) {
      return "이미 가입된 메일입니다";
    } else {
      return `회원가입 실패: ${error.message}`;
    }
  }

  // 추가 정보를 사용자 테이블에 저장
  if (data.user) {
    const { error: insertError } = await supabase.from("user").insert({
      uid: data.user.id,
      email: email,
      nickName: nickName,
    });

    if (insertError) {
      return `사용자 정보 저장 실패: ${insertError.message}`;
    }
  }

  return null; // 성공 시 null 반환
};
