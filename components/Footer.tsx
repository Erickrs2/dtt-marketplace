export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://meshjs.dev/" className="flex items-center">
              <img
                src="https://meshjs.dev/logo-mesh/white/logo-mesh-white-128x128.png"
                className="mr-3 h-8"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Powered by Mesh SDK
              </span>
            </a>
            
          </div>
          <div className="grid grid-cols-1 gap-8 text-gray-900 dark:text-white">
            <div>
              <h2 className="mt-0 text-sm font-semibold uppercase underline">
                PROJECTS
              </h2>
              
              <h2 className="mt-6 text-sm font-semibold uppercase">
                1. Digital Twin Tech:
              </h2>
              <a href="https://digitaltwintech.com.br">www.digitaltwintech.com.br</a>
              <p>Policy ID: xxyyzzddddffdfdgfhfhdhdhdhdfhdfhdhhdhdhhf</p>

              <h2 className="mt-6 text-sm font-semibold uppercase">
                2. Intitech:
              </h2>
              <a href="https://intitech.com.br">www.intitech.com.br</a>
              <p>Policy ID: xxyyzzddddffdfdgfhfhdhdhdhdfhdfhdhhdhdhhf</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
