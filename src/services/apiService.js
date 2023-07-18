const apiKey = "c1e21afb";

export const fetchMovieDetails = async (id, setData, setLoading) => {
  setLoading(true);
  fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
  )
  .then((res) => {
    if(res.ok){
      return res.json();
    }else{
      throw new Error('Network response was not ok');
    }
  })
  .then((data) => {
    setData(data)
  })
  .catch((error) => {
    console.log("ERROR",error)
  })
  .finally(() => setLoading(false))
};
