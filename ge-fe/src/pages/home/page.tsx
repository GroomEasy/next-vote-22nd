import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">홈페이지</h1>
      <button
        onClick={() => navigate('/auth/login')}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900"
      >
        로그인 페이지
      </button>
      <button
        onClick={() => navigate('/auth/signup')}
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        회원가입 페이지
      </button>
    </div>
  );
};

export default HomePage;
