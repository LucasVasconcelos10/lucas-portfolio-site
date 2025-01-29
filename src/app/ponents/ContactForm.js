
export default function ContactForm() {
    async function sendEmail(event) {
        event.preventDefault()
        const response = await (await fetch("/api/sendEmail")).json()
        console.log(response)
    }

    return (
        <form className='grid grid-cols-1 w-3/5 h-fit place-items-center gap-7'>
            <h1 className='text-4xl'>Contact Me</h1>
            <input placeholder='Enter your subject here' className='flex w-full max-h-1/5 rounded-lg border-purple-700 border-2 text-xl text-black '>
            </input>
            <textarea placeholder='Enter your message here' className='flex w-full max-h-24 rounded-lg border-purple-700 border-2 text-black'>
            </textarea>
            <div id="contact-form-btn-container" className="w-fit h-fit p-4 bg-purple-700 rounded-xl transform transition-all hover:scale-110 hover:brightness-150 duration-200">
                <button type='submit' id='sendEmailBtn' className='w-fit h-fit rounded-xl' onClick={sendEmail}>Send Message</button>
            </div>
        </form>
    )
}