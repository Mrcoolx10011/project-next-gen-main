'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
  { 
    name: 'Bootstrap', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
  { 
    name: 'Magento', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg'
  },
  { 
    name: 'Angular JS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png'
  },
  { 
    name: 'CSS3', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  { 
    name: 'Semantic UI', 
    icon: 'https://semantic-ui.com/images/logo.png'
  },
  { 
    name: 'Google APIs', 
    icon: 'https://www.gstatic.com/devrel-devsite/prod/v2f6fb68338062e7c16672db62c4ab042dcb9bfbacf2fa51b6959426b203a4d8a/cloud/images/cloud-api-logo.svg'
  },
  { 
    name: 'WordPress', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  { 
    name: 'MySQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  { 
    name: 'Shopify', 
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/shopify-icon.png'
  },
  { 
    name: 'AMP', 
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amp-icon.png'
  },
  { 
    name: 'WooCommerce', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg'
  },
  { 
    name: 'BackboneJS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg'
  },
  { 
    name: 'Joomla', 
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/joomla-color-icon.png'
  },
  { 
    name: 'jQuery', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
  },
  { 
    name: 'OpenCart', 
    icon: 'https://www.opencart.com/application/view/image/icon/opencart-logo.png'
  },
  { 
    name: 'XML', 
    icon: 'https://www.svgrepo.com/show/31053/xml.svg'
  },
  { 
    name: 'CodeIgniter', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'
  },
  { 
    name: 'Materialize CSS', 
    icon: 'https://raw.githubusercontent.com/Dogfalo/materialize/v1-dev/images/m-logo-salmon.png'
  },
  { 
    name: 'React JS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    name: 'AJAX', 
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/ajax-icon.png'
  },
  { 
    name: 'Node JS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'JSON', 
    icon: 'https://www.svgrepo.com/show/353943/json.svg'
  },
  { 
    name: 'Vue.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  { 
    name: 'PHP', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    name: 'UIkit', 
    icon: 'https://getuikit.com/images/uikit-logo-large.svg'
  },
  { 
    name: 'Web Services', 
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/it-icon.png'
  }
]

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Robust Tools & Technologies We Work With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies and trusted tools to deliver exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center aspect-square"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-12 h-12 mb-4">
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={48}
                      height={48}
                      className="transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/48x48.png?text=${tech.name[0]}`;
                      }}
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-400 text-xs">{tech.name[0]}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-800 text-center">
                  {tech.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

