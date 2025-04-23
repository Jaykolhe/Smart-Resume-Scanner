export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("/api/resumes/upload", {
    method: "POST",
    body: formData,
  });
  return response.json();
};

const BASE_URL = "http://localhost:8080";

export const searchResumes = async (keyword) => {
  const response = await fetch(
    `${BASE_URL}/api/resumes/resumes/search?keyword=${encodeURIComponent(
      keyword
    )}`
  );
  return response.json();
};
