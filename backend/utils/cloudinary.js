import { v2 as cloudinary } from "cloudinary"
import fs from "node:fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload on cloudinary

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // file has been uploaded
        fs.unlinkSync(localFilePath)

        return response
    } catch (error) {
        console.log("Cloudinary upload error: ", error)
        fs.unlinkSync(localFilePath) // remove local File as Sync when upload failed
    }
}

export { uploadOnCloudinary }