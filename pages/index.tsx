import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

// _____ Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle, RedSpan } from '@/components/QuoteGenerator/QuoteGeneratorElements';
import QuoteGeneratorModal from '@/components/QuoteGenerator';

// _____ Assets
import Sun1 from '../assets/sun.png';
import Scroll2 from '../assets/scroll.png';
import { API } from 'aws-amplify';
import { quotesQueryName } from '@/src/graphql/queries';
import { GraphQLResult } from '@aws-amplify/api-graphql';




// _____ Interface for DynamoDB object
interface UpdateQuoteInfoData {
	id: string;
	queryName: string;
	quotesGenerated: number;
	createdAt: string;
	updatedAt: string;
}

// _____ Type guard for our fetch function
function isGraphQLResultForquotesQueryName ( response: any ): response is GraphQLResult<{
	quotesQueryName: {
		items: [ UpdateQuoteInfoData ];
	};
}> {
	return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
}




export default function Home () {
	const [ numberOfQuotes, setNumberOfQuotes ] = useState<Number | null>( 0 );
	const [ openGenerator, setOpenGenerator ] = useState( false );
	const [ processingQuote, setProcessingQuote ] = useState( false );
	const [ quoteReceived, setQuoteReceived ] = useState<String | null>( null );

	// _____ Function to fetch our DynamoDB object (quotes generated)
	const updateQuoteInfo = async () => {
		try {
			const response = await API.graphql<UpdateQuoteInfoData>( {
				query: quotesQueryName,
				authMode: "AWS_IAM",
				variables: {
					queryName: "LIVE",
				},
			} );
			console.log( 'response', response );
			// setNumberOfQuotes();

			// _____ Create type guards
			if ( !isGraphQLResultForquotesQueryName( response ) ) {
				throw new Error( 'Unexpected response from API.graphql' );
			}

			if ( !response.data ) {
				throw new Error( 'Response data is undefined' );
			}

			const receivedNumberOfQuotes = response.data.quotesQueryName.items[ 0 ].quotesGenerated;
			setNumberOfQuotes( receivedNumberOfQuotes );

		} catch ( error ) {
			console.log( 'error getting quote data', error );
		}
	};

	useEffect( () => {
		updateQuoteInfo();
	}, [] );



	// _____ Functions for quote generator modal
	const handleCloseGenerator = () => {
		setOpenGenerator( false );
		setProcessingQuote(false);
		setQuoteReceived(null);
	};

	const handleOpenGenerator = async ( e: React.SyntheticEvent ) => {
		e.preventDefault();
		setOpenGenerator( true );
		setProcessingQuote( true );
		try {
			// Run Lambda Function


			// setProcessingQuote(false);
			setTimeout( () => {
				setProcessingQuote( false );
			}, 3000 );
			
		} catch ( error ) {
			console.log( 'error generating quote:', error );
			setProcessingQuote( false );
		}
	};



	return (
		<>
			<Head>
				<title>Inspirational Quote Generator</title>
				<meta name="description" content="A fun project to generate quotes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Background */}
			<GradientBackgroundCon>

				{/* Quote Generator Modal Pop-Up*/}
				<QuoteGeneratorModal
					open={openGenerator}
					close={handleCloseGenerator}
					processingQuote={processingQuote}
					setProcessingQuote={setProcessingQuote}
					quoteReceived={quoteReceived}
					setQuoteReceived={setQuoteReceived}
				/>

				{/* Quote Generator */}
				<QuoteGeneratorCon>
					<QuoteGeneratorInnerCon>
						<QuoteGeneratorTitle>
							Daily Inspiration Generator
						</QuoteGeneratorTitle>

						<QuoteGeneratorSubTitle>
							Looking for a splash of inspiration? Generate a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer"> ZenQuotesAPI </FooterLink>
						</QuoteGeneratorSubTitle>

						<GenerateQuoteButton
							onClick={handleOpenGenerator}
						>
							<GenerateQuoteButtonText>
								Make a Quote
							</GenerateQuoteButtonText>
						</GenerateQuoteButton>
					</QuoteGeneratorInnerCon>
				</QuoteGeneratorCon>


				{/* Background Images */}
				<BackgroundImage1
					src={Sun1}
					alt="brainbackground1"
				/>
				<BackgroundImage2
					src={Scroll2}
					alt="scrollbackground2"
				/>

				{/* Footer */}
				<FooterCon>
					<>
						Quotes Generated: {numberOfQuotes}
						<br />
						Developed with <RedSpan> ♥ </RedSpan> by <FooterLink href="https://github.com/Nix7amcm" target="_blank" rel="noopener noreferrer"> Nix7amcm⚡ </FooterLink>
					</>
				</FooterCon>

			</GradientBackgroundCon>

		</>
	);
}
