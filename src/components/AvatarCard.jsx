import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

function AvatarCard({ name, img }) {
    return (
      <div className="bg-white rounded-lg shadow-md flex flex-row hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        {/* Left side - Image */}
        <div className="relative h-auto w-[45%]">
          <div className="h-full p-1">
            <img 
              src={img} 
              alt={name} 
              className="rounded-l-lg w-full h-full object-cover border-2 border-white" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://randomuser.me/api/portraits/men/1.jpg";
              }}
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Right side - Content */}
        <div className="px-4 py-4 flex flex-col justify-center w-2/3">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 mb-3">AI Avatar</p>
          
          {/* Active platforms section */}
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-2">Active Platforms</p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-black hover:text-gray-800">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
          
          <button className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-800 to-blue-700 text-white rounded-md hover:opacity-90 transition-all duration-300 focus:ring-2 focus:ring-purple-300 focus:outline-none cursor-pointer w-fit">
            Edit
          </button>
        </div>
      </div>
    );
  }
  
export default AvatarCard;
