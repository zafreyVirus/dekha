import Link from "next/link"

const CallToAction = () => {
  return (
    <div>
                      <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-deepblue to-lightblue rounded-2xl p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Transform Your HR Operations?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Let's discuss how our services can help your organization achieve its goals.
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-deepblue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
                                Get Started Today
                            </button>
                        </Link>
                    </div>
                </div>
    </div>
  )
}

export default CallToAction
