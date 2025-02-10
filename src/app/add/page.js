import Form from "../components/Form";
import { addPost } from "./action";

export default function AddPage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Form addPost={addPost} />
        </div>
    );
}