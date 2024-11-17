import Image from "next/image"
import "../style/medicine.css"
interface MedicineType {
    image: string,
    name: string,
    price: string
}

export default function MedicineCard({image, name,  price}:MedicineType){
    return (
        <div className="project-item">
                    <Image
                        src={image} 
                        alt="Pain Relief Medication"
                        width={300}
                        height={250}
                        className="image"
                    />
                    <h3>{name}</h3>
                    <p className="price">{price}</p>
                </div>
    )
}

