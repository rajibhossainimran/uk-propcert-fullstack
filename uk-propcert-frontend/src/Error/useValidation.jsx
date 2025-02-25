export default function useValidation(errors, field) {
    if (!errors || !errors[field]) return null;
  
    return errors[field].map((error, index) => (
      <div key={index} className="text-sm text-red-600 mt-1 bg-red-200 py-1">
        {error}
      </div>
    ));
  }
  