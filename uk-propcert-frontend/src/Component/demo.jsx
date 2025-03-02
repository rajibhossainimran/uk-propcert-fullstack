import { useState } from 'react';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    propertyType: '',
    certificationType: '',
    date: '',
    time: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!/^07\d{9}$/.test(formData.phone)) newErrors.phone = 'Invalid UK phone number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!/^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i.test(formData.postcode)) newErrors.postcode = 'Invalid postcode';
    if (!formData.propertyType) newErrors.propertyType = 'Required';
    if (!formData.certificationType) newErrors.certificationType = 'Required';
    if (!formData.date) newErrors.date = 'Required';
    if (!formData.time) newErrors.time = 'Required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit logic here
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Property Certification Booking</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client Information */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Your Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="07123 456789"
                className={`mt-1 block w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Property Information</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Address*</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${errors.address ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Postcode*</label>
              <input
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${errors.postcode ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Property Type*</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${errors.propertyType ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="hmo">HMO</option>
              </select>
              {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
            </div>
          </div>
        </div>

        {/* Service Selection */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Service Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Certification Type*</label>
              <select
                name="certificationType"
                value={formData.certificationType}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${errors.certificationType ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              >
                <option value="">Select certification</option>
                <option value="epc">Energy Performance Certificate (EPC)</option>
                <option value="gas">Gas Safety Certificate</option>
                <option value="electrical">Electrical Installation Report</option>
              </select>
              {errors.certificationType && <p className="text-red-500 text-sm mt-1">{errors.certificationType}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Preferred Date*</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={`mt-1 block w-full rounded-md border ${errors.date ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Preferred Time*</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${errors.time ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8am-12pm)</option>
                <option value="afternoon">Afternoon (12pm-5pm)</option>
              </select>
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">
              I agree to the <a href="/terms" className="text-blue-600 hover:underline">terms and conditions</a>*
            </span>
          </label>
          {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Demo;