import React, { MouseEvent } from 'react'
import Button from '../Button'
import './style.scss'

export type ProjectCardProps = {
  imgFileName?: string,
  imgAlt?: string,
  title?: string,
  description?: string,
  linkPath?: string,
  hastags?: string[]
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
    imgFileName = 'default.jpg',
    imgAlt = '',
    title = 'Title',
    description = 'Description',
    hastags = [],
  }) => {

  const handleClickDemo = (e: MouseEvent<HTMLButtonElement>) => {

  } 

  return (
    <div className='project-card-container' data-testid='project-card'>
      <div className='project-card'>
        <div className='project-card__picture'>
          <img width={400} src={require(`../../assets/medias/projects_dev/`+ imgFileName)} alt={imgAlt} />
        </div>
        <div className='project-card__content'>
          <ul className='project-card__content__hashtags'>
            {hastags.map((hashtag) => (
              <li key={hashtag}>{hashtag}</li>
            ))}
          </ul>
          <h3 className='project-card__content__title'>{title}</h3>
          <p className='project-card__content__desc'>{description}</p>
          <Button label='Démo' onClick={handleClickDemo}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard