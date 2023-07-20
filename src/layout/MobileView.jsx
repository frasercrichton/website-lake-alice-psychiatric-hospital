import React, { useEffect } from 'react'
import { MobileView } from 'react-device-detect'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import VideoVimeo from '../components/VideoVimeo.jsx'
import Header from './Header.jsx'
import MarkdownPage from './MarkdownPage.jsx'
import Image from '../components/Image.jsx'
import './MobileView.css'

const MobileCover = ({
  activeChapter,
  navigateToChapter,
  pageInView,
  setMobile,
  toggleCoverActive
}) => {
  const { pageId, text, image, content, view } = pageInView
  const location = useLocation()

  return (
    <MobileView className='mobile'>
      <Header
        activeChapter={activeChapter}
        navigateToChapter={navigateToChapter}
        isMobile
      />
      <div className='mobile-container'>
        {view === 'markdown' && content.file !== undefined && (
          <MarkdownPage key={pageId} fileName={content.file} />
        )}
        {view !== 'markdown' && location.pathname !== '/introduction' && (
          <div className='intro-text-container'>
            <h2>Te Wāhanga Tamaiti, Taitamariki o Lake Alice</h2>
            <h2>Lake Alice Child and Adolescent Unit</h2>
            <div className='mobile-image-container'>
              <Image src='https://d10yslqdemxz8r.cloudfront.net/lake-alice.space/images/fc-20230314-00001-R26288154-0001.jpg' />
            </div>
            <Link
              role='button'
              onClick={e => toggleCoverActive()}
              className='nav-item'
              to='/introduction'
            >
              <Button action={e => toggleCoverActive()} label='Explore' />
            </Link>
          </div>
        )}
        {location.pathname === '/introduction' && (
          <div className='intro-text-container'>
            <h2>Te Wāhanga Tamaiti, Taitamariki o Lake Alice</h2>
            <h2>Lake Alice Child and Adolescent Unit</h2>
            <div className='mobile-image-container'>
              <Image src='https://d10yslqdemxz8r.cloudfront.net/lake-alice.space/images/Screenshot 2023-06-01 at 12.35.41 PM.png' />
            </div>
            <p>
              The United Nations Committee Against Torture (UNCAT) found New
              Zealand in breach of the Convention Against Torture in 2019.
            </p>
            <p>
              New Zealand had failed to ensure a prompt and impartial
              investigation into allegations of systematic physical, emotional
              and sexual child abuse at the Lake Alice Child and Adolescent
              Unit.
            </p>
            <p>
              The Child and Adolescent Unit opened in 1972 and closed around
              1980 after allegations that electroconvulsive therapy (ECT) and
              paraldehyde 'aversion therapy' were used as a form of torture to
              punish children with behavioural issues in the unit.
            </p>
            <p>
              After civil cases were brought against the Crown, minimal
              compensation was paid to a group of 95 survivors in 2001. Legal
              fees swallowed up the majority of this payment.
            </p>
            <p>
              Three of New Zealand's initial periodic reports to UNCAT
              deliberately excluded all mention of Lake Alice and the survivors’
              allegations of torture.
            </p>
            <p>
              Two survivors of Lake Alice have since had their complaints
              recognised by the United Nations – Paul Zentveld in 2020 and
              Malcolm Richards in 2022.
            </p>
            <p>
              Only in 2021 was a former member of staff charged by the police.No
              one has ever been convicted.
            </p>
            <p>New Zealand is still in breach of the convention. </p>
            <p>
              Fifty years on, when will there be justice for the survivors of
              Lake Alice?
            </p>
            <VideoVimeo
              id={689154638}
              caption={'Malcolm Richards - Lake Alice Survivor'}
            />
            <p className='caption'>Testimony by Malcolm Richards</p>
            <p className='mobile-text'>
              The full version of this website does not support mobile devices.
              To view a 3D model of the former Lake Alice Psychiatric Hospital,
              see details of where it was located and read further survivor
              testimony, try viewing on a laptop or desktop.
            </p>
          </div>
        )}
      </div>
    </MobileView>
  )
}

export default MobileCover
