async function fetchData(userID) {
    const response = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userID}`);
    const jsonData = await response.json();
    
    return jsonData;
}

export default fetchData;