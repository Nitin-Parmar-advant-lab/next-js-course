"use client"

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
    // this must be between for element and this must be client componet
    const status = useFormStatus();

      if (status.pending) {
        return <p> Creating post...</p>
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    );
}
