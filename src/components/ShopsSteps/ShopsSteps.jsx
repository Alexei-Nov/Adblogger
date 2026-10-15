import React, { useState } from 'react'
import './shopsSteps.css'
import { handleTracking } from 'utils/tracking'

export default function ShopsSteps({ block_state }) {

	const [readMoreStatus, setReadMoreStatus] = useState(false)

	return (
		<>
			<section className="section shops-steps">
				<div className="container">
					<div className="shops-steps__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="shops-steps__wrapper">
						<div className={"shops-steps__body" + (readMoreStatus ? '' : ' shops-steps__body_hide')}>
							<div className="shops-steps__subtitle text-32 fw-500" >
								<div className="shops-steps__subtitle-text" dangerouslySetInnerHTML={{ __html: block_state.subtitle }}></div>
								<div className="shops-steps__arrow" onClick={(e) => { setReadMoreStatus(!readMoreStatus) }}>
									<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 12.4393C28.6464 13.0251 28.6464 13.9749 28.0607 14.5607L19.0607 23.5607C18.4749 24.1464 17.5251 24.1465 16.9393 23.5607L7.93934 14.5607C7.35356 13.9749 7.35356 13.0251 7.93934 12.4393C8.52513 11.8536 9.47488 11.8536 10.0607 12.4393L18 20.3787L25.9393 12.4393C26.5251 11.8536 27.4749 11.8536 28.0607 12.4393Z" fill="#99A2AD" />
									</svg>
								</div>
							</div>
							<div className="shops-steps__body-panel">
								<div className="shops-steps__list-title text-24 fw-500" dangerouslySetInnerHTML={{ __html: block_state.list_title }}></div>
								<div className="shops-steps__list text-18">
									{block_state.items_list.map((item, index) => {
										return (
											<div className="shops-steps__list-item" key={index} >
												<div className="shops-steps__list-item-icon">
													<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M26.5607 17.5607C27.1464 16.9749 27.1464 16.0251 26.5607 15.4393C25.9749 14.8536 25.0251 14.8536 24.4393 15.4393L18 21.8787L15.5607 19.4393C14.9749 18.8536 14.0251 18.8536 13.4393 19.4393C12.8536 20.0251 12.8536 20.9749 13.4393 21.5607L16.9393 25.0607C17.5251 25.6464 18.4749 25.6464 19.0607 25.0607L26.5607 17.5607Z" fill="#00D3E6" />
														<path fillRule="evenodd" clipRule="evenodd" d="M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20ZM34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20Z" fill="#00D3E6" />
													</svg>
												</div>
												<div className="shops-steps__list-item-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
						<div className="shops-steps__cards-list">
							{block_state.cards_list.map((card, index) => {
								return (
									<div className="shops-steps__card" key={index}>
										<div className="shops-steps__card-num text-30 fw-500">{index + 1}</div>
										<picture className="shops-steps__card-img">
											{card.img_mob &&
												<source media="(max-width: 1024px)" srcSet={card.img_mob} />
											}
											<img src={card.img} alt="img" />
										</picture>
										<div className="shops-steps__card-body">
											<div className="shops-steps__card-name text-24 fw-500" dangerouslySetInnerHTML={{ __html: card.name }}></div>
											<div className="shops-steps__card-desc text-18" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					<a href={block_state.btn_link}
						className="shops-steps__btn btn btn_big btn_rounded btn_border text-24 fw-500"
						onClick={() => handleTracking('registration_all')}
					>{block_state.btn_text}</a>
				</div>
			</section>
		</>
	)
}
