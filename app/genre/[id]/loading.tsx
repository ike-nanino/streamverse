import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


function Loading() {
  return (
    <div className='fixed inset-0 w-full max-h-full h-full max-w-full bg-black overflow-hidden z-50'>
      <div className='flex items-center justify-center h-full text-blue-600'>
        <div className='animate-spin text-2xl'><FontAwesomeIcon icon={faCircleNotch} /></div>
      </div>
    </div>
  )
}

export default Loading
