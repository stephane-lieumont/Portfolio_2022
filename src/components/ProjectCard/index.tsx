import { FunctionComponent } from 'react'
import { ProjectCardProps } from '~/interfaces/Component.intf'
import { firstLetterUpper } from '~/utils/formatString'
import './style.scss'

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ projectData, className }) => {

  return (
    <div className={`project-card-container ${className}`} data-testid='project-card'>
      <div className={`project-card`}>
        <div className='project-card__picture'>
          <img width={400} src={projectData.imgFile} alt={projectData.imgAlt} />
        </div>
        <div className='project-card__content'>
          <ul className='project-card__content__hashtags'>
            {projectData.hashtags.map((hashtag: string) => (
              <li key={hashtag}>{firstLetterUpper(hashtag)}</li>
            ))}
          </ul>
          <h3 className='project-card__content__title'>{projectData.title} <span>({projectData.released.getFullYear()})</span></h3>         
        </div>
      </div>
    </div>
  )
}

export default ProjectCard