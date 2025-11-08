import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UserType = 'customer' | 'expert';

const TABS = [
  { label: '그루머', value: 'customer' },
  { label: '전문가', value: 'expert' },
];

export function SignUpForm() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>('customer');
  const [formData, setFormData] = useState({
    nickname: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('회원가입:', { ...formData, userType, agreed });
  };

  const isFormValid =
    formData.nickname &&
    formData.birthDate &&
    formData.email &&
    formData.password &&
    formData.passwordConfirm &&
    agreed;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center px-4 py-3">
        <button onClick={() => navigate(-1)} className="mr-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-base font-medium">회원가입</h1>
      </header>

      {/* Tabs */}
      <div className="flex px-4 mt-2">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setUserType(tab.value as UserType)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              userType === tab.value
                ? 'text-black underline underline-offset-8 decoration-2'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form - 스크롤 가능 영역 */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6">
          {/* 닉네임 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">닉네임</label>
            <input
              name="nickname"
              placeholder="이름을 입력해주세요."
              value={formData.nickname}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-400 text-sm bg-transparent"
            />
          </div>

          {/* 생년월일 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">생년월일</label>
            <input
              name="birthDate"
              placeholder="ex) 19980101"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-400 text-sm bg-transparent"
            />
          </div>

          {/* 이메일 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">이메일</label>
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-400 text-sm bg-transparent"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">비밀번호</label>
            <input
              name="password"
              type="password"
              placeholder="영문+숫자 조합 8자리 이상 입력"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-400 text-sm bg-transparent"
            />
          </div>

          {/* 비밀번호 재확인 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">비밀번호 재확인</label>
            <input
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              value={formData.passwordConfirm}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-400 text-sm bg-transparent"
            />
          </div>

          {/* 약관 동의 */}
          <div className="pt-4">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-gray-300"
              />
              <span className="text-xs text-gray-600 leading-relaxed">
                이용약관 및 개인정보처리 방침에 동의합니다. (필수)
              </span>
            </label>
          </div>
        </form>
      </div>

      {/* Submit Button - 하단 고정 */}
      <div className="p-4 border-t">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-3.5 rounded-lg font-medium transition-colors ${
            isFormValid ? 'bg-black text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
}
