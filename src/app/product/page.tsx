import MedicineCard from "@/components/medicine";
import "../../style/product.css";
import Image from "next/image";

export default function PharmacyItems() {
    return (
        <div className="project-box">
            <h1 className="project-heading">Available Pharmacy Items</h1>
            <div className="main-div">
                
                <MedicineCard
                image="/cac.png"
                name="Cac"
                price="Rs:300"
                />
                <MedicineCard
                image="/cebosh.png"
                name="Cebosh"
                price="Rs:499"
                />
                <MedicineCard
                image="/duphalac.png"
                name="Duphalac Sup"
                price="Rs:285"
                />
                <MedicineCard
                image="/hydrozole.png"
                name="Hydrozole"
                price="Rs:324"
                />
                <MedicineCard
                image="/indrop d.png"
                name="Indrop-D Inj"
                price="Rs:284"
                />
                <MedicineCard
                image="/klaricid.png"
                name="Klaricid"
                price="Rs:912"
                />
                <MedicineCard
                image="/linkus.png"
                name="linkus-bam"
                price="Rs:300"
                />
                <MedicineCard
                image="/prospan.png"
                name="Prospan Sup"
                price="Rs:627"
                />
                <MedicineCard
                image="/surbex.png"
                name="Surbex-z"
                price="Rs:360"
                />
                <MedicineCard
                image="/Ulsanic.png"
                name="Ulsanic Sup"
                price="Rs:393"
                />
                <MedicineCard
                image="/Xynosine-Spray.png"
                name="Xynosine Drop"
                price="Rs:70"
                />
                <MedicineCard
                image="/nise.png"
                name="Nise"
                price="Rs:220"
                />

            </div>
        </div>
    );
}