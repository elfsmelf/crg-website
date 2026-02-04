import Image from "next/image"

const projects = [
  "https://assets.guestsnapper.com/wedding-gallery-media/lvl5-cavill-007.jpg",
  "https://assets.guestsnapper.com/wedding-gallery-media/PHOTO-2026-01-28-09-54-25.jpg",
  "https://assets.guestsnapper.com/wedding-gallery-media/sheraton%202.jpg",
  "https://assets.guestsnapper.com/wedding-gallery-media/sheraton%203.jpg",
  "https://assets.guestsnapper.com/wedding-gallery-media/sheraton%204.jpg",
  "https://assets.guestsnapper.com/wedding-gallery-media/PHOTO-2026-01-28-09-55-08%20(2).jpg",
]

export function ProjectsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-heading)]">
            Recent Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real work for real Gold Coast businesses. See the quality that sets us apart.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((image, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
