import React, { MouseEvent } from 'react'
import { ProjectDevData } from '../../interfaces/Data.intf'
import Button from '../Button'
import { firstLetterUpper } from '../../utils/formatString'
import './style.scss'

export type ProjectCardProps = {
  projectData: ProjectDevData
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({ projectData }) => {

  const handleClickDemo = (e: MouseEvent<HTMLButtonElement>) => {

  } 

  return (
    <div className='project-card-container' data-testid='project-card'>
      <div className='project-card'>
        <div className='project-card__picture'>
          <img width={400} src={require(`../../assets/medias/projects_dev/`+ projectData.imgFileName)} alt={projectData.imgAlt} />
        </div>
        <div className='project-card__content'>
          <ul className='project-card__content__hashtags'>
            {projectData.hashtags.map((hashtag: string) => (
              <li key={hashtag}>{firstLetterUpper(hashtag)}</li>
            ))}
          </ul>
          <h3 className='project-card__content__title'>{projectData.title} <span>({projectData.released.getFullYear()})</span></h3>
          <p className='project-card__content__desc'>{projectData.description}</p>
          {projectData.demoLink ? (
            <Button label='Démo' onClick={handleClickDemo}/>
          ) : null}          
        </div>
      </div>
    </div>
  )
}

export default ProjectCard