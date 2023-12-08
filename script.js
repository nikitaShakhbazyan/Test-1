function serialize(arr) {
    return arr.join(',');
  }
  
  function deserialize(str) {
    return str.split(',').map(Number);
  }
  
  
  const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1);
  const serialized = serialize(testArray);
  const deserialized = deserialize(serialized);
  const compressionRatio = serialized.length / JSON.stringify(testArray).length;

  console.log('oRiginal:', testArray);
  console.log('Serializd:', serialized);
  console.log('Deserialized:', deserialized);
  console.log('Compression Ratio:', compressionRatio); 


  