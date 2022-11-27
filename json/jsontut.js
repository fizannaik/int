const biodata={
    name:"fizan",
    id : 11905580,
    student : "Lpu"
    };
    // console.log(biodata.student);
    const jsonData = JSON.stringify(biodata);
    // console.log(jsonData);
    // console.log(jsonData.student);
    const objData=JSON.parse(jsonData);
    console.log(objData);