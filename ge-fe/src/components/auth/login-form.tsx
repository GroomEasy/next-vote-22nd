import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../images/login/back.svg';
import googleIcon from '../../images/login/google.svg';
import kakaoIcon from '../../images/login/kakao.svg';
import separateIcon from '../../images/login/seperate.svg';

type UserType = 'login' | 'expert';

export function LoginForm() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인:', { ...formData, userType });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)} className="mr-3">
          <img src={backIcon} alt="back" className="w-2.5 h-[18px]" />
        </button>
        <h1 className="text-xl font-semibold">회원가입/로그인</h1>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setUserType('login')}
          className={`flex-1 py-3 text-base font-medium transition-colors relative ${
            userType === 'login' ? 'text-black' : 'text-gray-400'
          }`}
        >
          로그인
          {userType === 'login' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
          )}
        </button>
        <button
          onClick={() => setUserType('expert')}
          className={`flex-1 py-3 text-base font-medium transition-colors relative ${
            userType === 'expert' ? 'text-black' : 'text-gray-400'
          }`}
        >
          전문가 로그인
          {userType === 'expert' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
          )}
        </button>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-6 pt-12">
          {/* Email Input */}
          <input
            name="email"
            type="email"
            placeholder="이메일 입력"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 placeholder:text-gray-400 text-base bg-white transition-colors"
            required
          />

          {/* Password Input */}
          <input
            name="password"
            type="password"
            placeholder="패스워드 입력"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 placeholder:text-gray-400 text-base bg-white transition-colors"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center rounded-2xl font-semibold text-base bg-black text-white hover:bg-gray-800 transition-colors"
          >
            로그인
          </button>

          {/* Password Reset / Sign Up Links */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <button type="button" className="hover:text-black transition-colors">
              비밀번호 찾기
            </button>
            <img src={separateIcon} alt="separator" className="w-px h-3" />
            <button
              type="button"
              onClick={() => navigate('/auth/signup')}
              className="hover:text-black transition-colors"
            >
              이메일로 회원가입
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-sm text-gray-500">SNS 계정으로 간편로그인</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-3 pb-8">
            <button
              type="button"
              className="w-full h-14 flex items-center justify-center gap-2 border border-gray-200 rounded-2xl bg-white hover:bg-gray-50 transition-colors"
            >
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
              <span className="text-base font-medium text-gray-900">Google 로그인</span>
            </button>
            <button
              type="button"
              className="w-full h-14 flex items-center justify-center gap-2 rounded-2xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#FEE500' }}
            >
              <img src={kakaoIcon} alt="Kakao" className="w-5 h-5" />
              <span className="text-base font-semibold" style={{ color: '#3C1E1E' }}>카카오톡 로그인</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
