import React, { useState } from 'react'

const useFormField = (initialValue = ``) => {
  const [value, setValue] = useState(initialValue);
  const onChange = React.useCallback(e => setValue(e.target.value), []);
  return { value, onChange };
};

export { useFormField }