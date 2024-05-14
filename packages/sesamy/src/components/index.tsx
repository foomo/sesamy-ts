import * as React from 'react';

export const GTMScript = ({ id }: { id: string }) => {
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `
						(function(w,d,s,l,g,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						w[g]=function(){w[l].push(arguments);}
						})(window,document,'script','dataLayer','gtag','${id}');
						`,
			}}
		/>
	);
};
