export async function extractTextFromImage(imageFile) {
  const formData = new FormData();

  formData.append('api_key', "d465090758745e9a5c83b5fd56b802");
  formData.append('id', "reciept"); // optional
  formData.append('image', imageFile);

  try {
    const response = await fetch('https://api-kolo.site/image_to_text/', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    const data = await response.json();
    return data

  } catch (error) {
    console.error("Error:", error.message);
  }
}
