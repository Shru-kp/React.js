import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCards';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App()
{
	return (
		<div>
			<div>
				<section className='hero is-primary'>
					<div className='hero-body'>
						<p className='title'>Personal Digital Assistant </p>
					</div>
				</section>
			</div>	
			<div clasName='container'>
				<section className='section'>
					<div className='columns'>
						<div className='column is-3'>
							<ProfileCard
								title='Alexa'
								handle='@alexa99'
								image={AlexaImage}
								description="Alexa was created by amazon and helps you in a lot of things "

							/>
							</div>

						<div className='column is-3'>
							<ProfileCard
								title='Cortana'
								handle='@cortana32'
								image={CortanaImage}
								description="Cortana was created by microsoft. "

							/>
							</div>

						<div className='column is-3'>
							<ProfileCard
								title='Siri'
								handle='@siri01'
								image={SiriImage}
								description="Siri is a competetor of alexa"
							/>
							</div>

					</div>
				</section>
			</div>
	</div>
	);
	
}
export default App;