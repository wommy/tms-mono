```
so i need to edit skills and i need to come up with some type of categories

so first of all i got html css and js

so in college my teachers always told me to stick to the basics,
	they advocated against chasing the new
	and while i hated it at the time, i now respect their push towards standards

	at the same time, sass

so i started with just html css and js

eventually i got into rails, and with it, ruby, erb, and mysql

after that, at an internship i used wordpress and hence php
	also started playing with python at this time

personally i built a website in mixture, server / site builder
	you could configure it to use a half dozen or so templating things, like
		liquid, haml, erb
	took in markdown
	im guessing it was a little ruby server / build tool
	honestly, i dont remember much about it because one day all of its documentation was gone
	afterwards i pivoted to jekyll
	
my jekyll time was short lived, because my laptop just died overnight one day, maybe six months later

i started working from a chromebook
	i found online editors
		the one i liked was called cloud9, bought by amazon maybe 2/3 years ago
with my macbook, i was working off a gulp instance which ran jekyll and my sass
with the chromebook, that was a little to intensive, so i switched to a npm pipeline of my own design

liquid and ruby in general, was confusing me to the point of losing productivity
	because i stitched together all these programs, whenever i had an error i never knew what caused it

this caused me to simply my setup drastically
i switched from ruby and liquid to a more javascript focused stack,
	i swapped out the jekyll and its liquid for jade, a fork of haml, which later turned into pug
	i ran CLI commands in bash to have it watch a folder and output it
	i still ran sass at the time, and had a similar script which ran and output
	lastly i had a server instance watch the output directory
	when it looked nice i would upload the files to my server, which was running cpanel

during this time, i was running git on github, but i didnt really get it
	jekyll is gitubs dogfood so i was always using it, 
	but i didnt really understand it until more recently
i had this program that hooked up to the github api, that was just a fancy markdown editor 
	that published straight to a github folder

that made me think: why was i running a server at all?
	which totally was not the right move, but definitely made me make headway on other fronts

around this time i started going to NYC for meetups,
	my girlfriend at the time was there, and i would visit a week or two at a time

one of my favorite webdevelopers at the time, kyle mathews, was doing a presentation at vice
i went and it changed my life

at the time i building in pug trying to write my own version of something like react or vue
	where i could add different nodes to the dom, which absolutely crippled my productivity
	but that meetup at vice really shook me to my core

the vice guys used a build tool called spike, which just upgraded to webpack
	i ported my site to it and it just worked.
	i joined their chatroom, hungout there every day
	even built the a scaffolding generator, to connect to a headless cms, dato
	previously my serverless workflow hit the maximum api requests from github,
		and this new api based one, obfuscated that low number of requests

during this time i also went to SF and met the netlify guys at their conference
i continued going back to nyc on account of my girlfriend at the time living there
actually i would be there right now, working at vice if we didnt break up
this past spring i went to both netlify_conf_nyc and gatsby_days,
	at the netlify_conf_nyc the vice guys offered me a job

one of my favorite meetups in nyc was called web performance nyc
	which talked about difference caching strategies and other performance tricks
	i learned alot of things to speed up the TTFB, and other page interactivity measures

	the new dynamic was the original group that hosted the vice gatsby meetup
		they advocated hugo and headless cms integration
		i also learned alot about different css preprocessors, tachyons, tailwind

	bud parr - founder the new dynamic
	jeff escalante - carrot, developed spike
		kyle macdonald - cto carrot, acq by vice
		daniel box - creative director KNI, one of the best ui/ux guys i know
		caleb eby - teenage savant, gonna be huge one day
		jonathon neal - premerier css developer, has affected alot of style standards
	sergey chernyshev - performance guru
	kyle mathews - founder gatsby: react & graphql ssg, pwa generator

over in detroit ive been going to detroit.js, which has since shuttered, 
and sem.js over in ann arbor

---

whats my setup now
	work off a chromebook, running debian vm
	zsh, vim, sublime, git

summary
	havent had an agency job
		solution people, original graphics printing
	freelance, open-source, nyc
	tour, hc, more nyc
	^ plug meetups

2015
	solution people
		wordpress
		mixture
	dad
	ogp
		jekyll
	home
	macbookpro died
	blogged
2016
	+ c9npmbp
	into webpack
	really big into pug
	experimented with things like vue and react
2017
	gatsby, spike, vice
	netlify
	spike
	startup week detroit
		AMBR det, hexigon creative
	forestry + elm philly
	ericjs
	postcss preset env
	detjs kill css
	budparr nye aws
2018
	detjs semjs
	spotify
	amit
	css wizardry - henry roberts @ squarespace
	marric
	tour
2019
	gatsby @ semjs
	jeff ejs, brent, pono, freedomtoons
	11ty
	netlify conf nyc
	elm detroit
	gatsby days
	semjs
	jamstacknyc, nycwebperf
	jekyll + github
```

so what to write
