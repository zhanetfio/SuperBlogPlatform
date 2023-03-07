


export const formattedDate = (createdAt:string)=>{

    const newFormatDate=new Date(createdAt)

    const year = newFormatDate.getFullYear();
    const month = newFormatDate.getMonth() + 1;
    const day = newFormatDate.getDate();

    return `${day}.${month}.${year}`;
}