import React, { useState, useEffect } from 'react';
import { PencilIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../context/AuthContext';
import { getUserProfileApi, updateUserProfileApi } from '../utils/api';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    role: '',
    companyName: '',
    studyingYear: '',
    degree: '',
    skills: []
  });

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const response = await getUserProfileApi();
        setProfileData(response.data);
        setFormData({
          name: response.data.name || '',
          email: response.data.email || '',
          profession: response.data.profession || '',
          role: response.data.role || '',
          companyName: response.data.companyName || '',
          studyingYear: response.data.studyingYear || '',
          degree: response.data.degree || '',
          skills: response.data.skills || []
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Failed to load profile data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'skills') {
      // For skills, we need to handle multiple selections
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
      setFormData(prevData => ({
        ...prevData,
        [name]: selectedOptions
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSave = async () => {
    try {
      const response = await updateUserProfileApi(formData);
      // Update the local state with the complete response data
      setProfileData({
        ...response.data,
        skills: response.data.skills || [],
        role: response.data.role || "",
        companyName: response.data.companyName || "",
        studyingYear: response.data.studyingYear || "",
        degree: response.data.degree || ""
      });
      setIsEditing(false);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
    }
  };

  const gradientBorder = {
    background: "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)"
  };

  const professionOptions = [
    "Student",
    "Employee",
    "Business Owner"
  ];

  const skillsOptions = [
    "Machine Learning",
    "Python",
    "Deep Learning",
    "Data Science",
    "JavaScript",
    "React",
    "Node.js",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design"
  ];

  const renderField = (label, name, type = "text") => {
    // Skip rendering if the field shouldn't be visible for the current profession
    if (name === "role" || name === "companyName") {
      if (formData.profession === "Student") return null;
    }
    if (name === "studyingYear" || name === "degree") {
      if (formData.profession !== "Student") return null;
    }

    return (
      <div className="relative">
        <div className="rounded-md"></div>
        <div className="relative">
          <label className="block text-xs uppercase tracking-wide text-gray-300 mb-1 font-medium">{label}</label>
          {isEditing ? (
            type === "select" ? (
              <select
                name={name}
                value={name === "skills" ? formData[name] : formData[name]}
                onChange={handleInputChange}
                multiple={name === "skills"}
                className={`w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#2D0C57] ${name === "skills" ? "h-32" : ""}`}
              >
                {name === "profession" ? (
                  professionOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))
                ) : name === "skills" ? (
                  skillsOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))
                ) : name === "degree" ? (
                  <>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                    <option value="PhD">PhD</option>
                  </>
                ) : null}
              </select>
            ) : type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#2D0C57] min-h-[100px]"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#2D0C57]"
              />
            )
          ) : (
            <div className="p-3 bg-[#0b0314] text-white rounded-md border border-[#2D0C57]">
              {name === 'skills' ? (
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(formData[name]) ? 
                    formData[name].map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-[#2D0C57] rounded-full text-sm">
                        {skill}
                      </span>
                    )) : formData[name]
                  }
                </div>
              ) : (
                formData[name] || "-"
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 pt-24 text-white text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3]">
            Profile Details
          </span>
        </h1>
      </div>

      <div className="relative p-4 md:p-6 rounded-xl mt-8">
        <div className="absolute inset-0 rounded-xl p-[2px]" style={gradientBorder}>
          <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
        </div>

        <div className="relative">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full p-[2px]" style={gradientBorder}></div>
                <img 
                  className="relative h-28 w-28 rounded-full object-cover"
                  src={(user?.profilePic) || "/placeholder.svg"} 
                  alt={user?.name || "Profile"} 
                />
                {isEditing && (
                  <div className="absolute bottom-0 right-0 bg-[#2D0C57] p-2 rounded-full">
                    <PencilIcon className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{user?.name || "User"}</h2>
                <p className="text-[#4c70b3]">{formData.degree} Student</p>
              </div>
            </div>
            
            <button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className={`px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2
                ${isEditing 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                  : 'text-white border border-[#2D0C57] hover:bg-[#2D0C57]'
                } focus:outline-none focus:ring-2 focus:ring-[#2D0C57] focus:ring-opacity-50`}
            >
              {isEditing ? (
                <>
                  <CheckIcon className="h-5 w-5" />
                  <span>Save Changes</span>
                </>
              ) : (
                <>
                  <PencilIcon className="h-5 w-5" />
                  <span>Edit Profile</span>
                </>
              )}
            </button>
          </div>

          {/* Profile Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Info - Always visible */}
            {renderField("Username", "username")}
            {renderField("Name", "name")}
            {renderField("Email", "email", "email")}
            {renderField("Contact Number", "contactNumber", "tel")}
            {renderField("Location", "location")}
            {renderField("Profession", "profession", "select")}
            
            {/* Full Width Bio */}
            <div className="md:col-span-2">
              {renderField("Bio", "bio", "textarea")}
            </div>

            {/* Skills - Always visible */}
            <div className="md:col-span-2">
              {renderField("Skills", "skills", "select")}
            </div>

            {/* Conditional Fields based on Profession */}
            {formData.profession === "Student" ? (
              <>
                {renderField("Studying Year", "studyingYear", "number")}
                {renderField("Degree", "degree", "select")}
              </>
            ) : (
              <>
                {renderField("Role", "role")}
                {renderField("Company Name", "companyName")}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;