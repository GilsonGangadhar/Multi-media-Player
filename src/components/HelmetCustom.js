import { Helmet } from 'react-helmet'

const HelmetCustom = ({
   title = 'React App',
   description = 'Video-Watching-App made using you-tube API',
}) => {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name='description' content={description} />
         <meta property='og:locale' content='en_US' />
         <meta property='og:type' content='website' />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={description} />
      </Helmet>
   )
}

export default HelmetCustom