import { useState, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';

function CreateAvatarModal({ onClose }) {
    const [dragActive, setDragActive] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const inputRef = useRef(null);

    // Handle drag events
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    // Handle file input change
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    // Process the selected file
    const handleFile = (file) => {
        // Only accept images
        if (!file.type.match('image.*')) {
            alert('Please select an image file');
            return;
        }
        
        // Create preview URL
        const reader = new FileReader();
        reader.onload = (e) => {
            setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    // Trigger file input click
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
      <div className="fixed inset-0 bg-gray-900/80 bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={() => onClose()}>
        <div className="bg-white p-8 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto custom-scrollbar" onClick={e => e.stopPropagation()}>
          <div className="relative">
            <IoMdClose 
              className="absolute top-0 right-0 text-gray-500 hover:text-gray-800 cursor-pointer text-xl transition-colors" 
              onClick={onClose}
              aria-label="Close modal"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200 pr-8">Create Influencer Avatar</h2>
          </div>
          
          <div className="space-y-4 mt-4">
            {/* Basic Info Section */}
            <h3 className="text-md font-semibold text-purple-700">Basic Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Avatar Image</label>
              <div 
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md 
                  ${dragActive ? "border-purple-600 bg-purple-50" : "border-gray-300"} 
                  ${imagePreview ? "border-purple-400" : ""} 
                  hover:border-purple-500 transition-all duration-200`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="flex flex-col items-center">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-800 to-blue-700 p-1 mb-2">
                        <img 
                          src={imagePreview} 
                          alt="Avatar Preview" 
                          className="rounded-full w-full h-full object-cover border-2 border-white" 
                        />
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setImagePreview(null)}
                        className="text-sm text-red-500 hover:text-red-700 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none"
                        >
                          <span onClick={onButtonClick}>Upload a file</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            ref={inputRef}
                            onChange={handleChange}
                            accept="image/*"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="pt-4">
              <h3 className="text-md font-semibold text-purple-700 mb-2">Social Media Presence</h3>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Platform</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none">
                  <option value="">Select a platform</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="facebook">Facebook</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Username/Handle</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    @
                  </span>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-purple-300 focus:outline-none" placeholder="username" />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Follower Count</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none">
                  <option value="">Select range</option>
                  <option value="micro">Micro (1K-10K)</option>
                  <option value="mid">Mid-tier (10K-100K)</option>
                  <option value="macro">Macro (100K-1M)</option>
                  <option value="mega">Mega (1M+)</option>
                </select>
              </div>
            </div>

            {/* Content & Niche Section */}
            <div className="pt-2">
              <h3 className="text-md font-semibold text-purple-700 mb-2">Content & Niche</h3>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Niche</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none">
                  <option value="">Select niche</option>
                  <option value="fashion">Fashion & Style</option>
                  <option value="beauty">Beauty & Makeup</option>
                  <option value="fitness">Fitness & Health</option>
                  <option value="food">Food & Cooking</option>
                  <option value="travel">Travel & Lifestyle</option>
                  <option value="tech">Technology & Gadgets</option>
                  <option value="gaming">Gaming</option>
                  <option value="business">Business & Finance</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Photos</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Videos</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Live Streams</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Stories</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Brand Voice Section */}
            <div className="pt-2">
              <h3 className="text-md font-semibold text-purple-700 mb-2">Brand Voice</h3>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Demographic</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none">
                  <option value="">Select demographic</option>
                  <option value="gen-z">Gen Z (Under 25)</option>
                  <option value="millennials">Millennials (25-40)</option>
                  <option value="gen-x">Gen X (40-55)</option>
                  <option value="boomers">Baby Boomers (55+)</option>
                  <option value="all">All Ages</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Brand Voice</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Friendly</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Professional</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Humorous</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Inspirational</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio/Description <span className="text-xs text-gray-500">(150 char max)</span>
                </label>
                <textarea 
                  rows="3" 
                  maxLength="150"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:outline-none"
                  placeholder="Brief description of this influencer avatar..."
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-2 mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition cursor-pointer">
              Cancel
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-800 to-blue-700 text-white rounded hover:opacity-90 transition cursor-pointer">
              Create Avatar
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CreateAvatarModal;
