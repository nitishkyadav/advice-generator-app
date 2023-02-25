import axios from "axios";
async function getAdvice(setAdvice) {
  const data = axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .then((data) => {
      setAdvice(data.slip);
      return data.slip;
    })
    .catch((err) => new Error("An error occured"));

  return data;
  //     try{
  //     const response=await axios.get("https://api.adviceslip.com/advice");
  //     if(response.status===200){
  //     const {id,advice}: data=await response.data.slip;
  //     return {id,advice};
  //     }

  // } catch(err:any){
  //     console.log(err.response.status);
  // }
}

export default getAdvice;
