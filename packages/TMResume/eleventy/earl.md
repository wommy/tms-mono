---
layout: 'new.njk'
permalink: 'earl/index.html'

Contact:
  - 'Earl A. Morales'
  - 'Pleasant Ridge, MI'
  - '(248) 525-0490'
  - 'earl.amorales@gmail.com'

Objective:
  Highly motivated healthcare professional with clinical experience, quick learning abilities, and passion for innovative technology, seeking a Clinical Informatics Specialist position at Ascension Health.

Education:

- Bachelor of Science in Nursing
- 'Graduated: April 2014'
- Central Philippines University, Iloilo City, Iloilo, Philippines
- content:
  - Current AHA Health Care Provider BLS
  - Proficient in EPIC systems, Microsoft Word, PowerPoint, and Excel

Clinical:

  Medical-Surgical, Iloilo Mission Hospital, Iloilo City, Iloilo, Philippines:
    June 2011-April 2014
  Psychiatrics, Pototan Mental Hospital, Pototan Iloilo, Philippines:
    October 2013
  Obstetrics, Western Visayas Medical Center, Mandurriao, Iloilo City, Iloilo, Philippines:
    September 2013
  Psychosocial, Leprosy Care, Western Visayas Sanitarium, Santa Barbara, Iloilo, Philippines:
    October 2009

Work:

- header:
  - Beaumont Hospital,
  - Royal Oak, MI
  - July 2018 – Present
  - Clinical Assistant SPCU
  content:
  - Provide direct patient care procedures and related tasks; vital signs, wound care, activities of daily living, blood glucose monitoring, and medical examinations
  -	'Participate in the specialized care for critically ill postoperative patients in the following specialties: trauma, orthopedic, vascular, maxillofacial, oncological, thoracic, urology, and general surgery'
  -	'Manage patients care with: Nasogastric tubes, foley catheters, chest tubes, wound vacs, pen rose drains, truclose drains, and biliary drains'
  -	Admit patients, organize charts, process consultations, document assessments and procedures into EPIC systems.
  -	Effectively communicate with health care team through Mobile Heartbeat smartphone application to report any abnormal findings and collaborate with clinicians to implement a plan of care for the patients.
  -	Actively participate in unit level changes with other clinicians on the unit and unit leadership
- header:
  - Henry Ford Hospital,
  - Macomb, MI
  - December 2014 – July 2018
  - Nurse Assistant In-patient rehab
  content:
  - Assists patients with their activities of daily living, monitor intake and output, nutritional support, and bathing
  - Built communication skills by working with nursing staff and interacting with multidisciplinary teams
  - Performs and obtains patient vital signs, capillary blood glucose, and venous blood draws
  - Responds to unexpected situations in an efficient and professional manner

- header:
  - Walgreens,
  - Madison Heights, MI
  - December 2014- October 2016
  - Certified Pharmacy Technician
  content:
  - Maintains customer satisfaction while working in a fast paced, high pressure environment
  - Collaborates with pharmacists in receiving, analyzing, and processing prescriptions
  - Builds technical skills through bookkeeping, inventory control, and thorough data entry
  - Communicates with patients and various health care providers in resolving issues

- header:
  - Ridgedale Senior Service Inc.,
  - Oak Park, MI
  - January 2004 – January 2008
  - Licensed Adult Foster Care Home Caregiver
  content:
  - Assisted in the comprehensive care of geriatric and dementia patients
  - Implemented leadership abilities by managing and scheduling activities to enhance patient interaction
  - Facilitated patient ambulation to improve outcomes

Additional1:
  - Birmingham Dance Academy,
  - Birmingham, MI
  - October 2014 – Present
  - Dance Teacher
Additional2:
  - Annie Divinagracia-Sartorio School of Performing Arts,
  - Iloilo City, Philippines
  - July 2008 – April 2014
  - Dance Teacher

---

<div class="
  h-[11in] w-[8.5in] py-[.2in] px-[.4in] outline
  mx-auto flex flex-col items-center
  flow
  text-sm tracking-tight leading-4
">

<header class="flex flex-col items-center">
  <h1 class="text-3xl">{{ Contact[0] }}</h1>
  <div><span>{{ Contact[1] }}</span></div>
  <div><span>{{ Contact[2] }}</span></div>
  <div><span>{{ Contact[3] }}</span></div>
</header>

<main class="flow">

<section>
<h2>Objective</h2>
<p>{{ Objective }}</p>
</section>

<section>
<h2>Education</h2>
<header>
<div class="flex justify-between">
<span class="italic">{{ Education[0] }}</span>
<span>{{ Education[1] }}</span>
</div>
<div>
<span>{{ Education[2] }}</span>
</div>
</header>
<ul>
{% for x in Education[3].content %}
<li>{{ x }}</li>
{% endfor %}
</ul>
</section>

<section>
<h2>Clinical Experience, Nurse Intern</h2>
<ul>
{% for x, y in Clinical %}
<li>
<div class="flex justify-between">
<span>{{ x }}</span>
<span class="ml-auto">{{ y }}</span>
</div>
</li>
{% endfor %}
</ul>
</section>

<section>
<h2>Work Experience</h2>
<div class="flow">
{% for ea in Work %}
<article>
<header>
<div class="flex justify-between">
<div>
<span class="font-bold">{{ ea.header[0] }}</span>
<span>{{ ea.header[1] }}</span>
</div>
<span>{{ ea.header[2] }}</span>
</div>
<div>
<span class="italic">{{ ea.header[3] }}</span>
</div>
</header>
<ul>
{% for x in ea.content %}
<li>{{ x }}</li>
{% endfor %}
</ul>
</article>
{% endfor %}
</div>
</section>

<section>
<h2>Additional Experiences</h2>
<div class="flow">
<div>
<div class="flex justify-between">
<div>
<span class="font-bold">{{ Additional1[0]}}</span>
<span>{{ Additional1[1]}}</span>
</div>
<span>{{ Additional1[2]}}</span>
</div>
<div>
<span class="italic">{{ Additional1[3]}}</span>
</div>
</div>
<div>
<div class="flex justify-between">
<div>
<span class="font-bold">{{ Additional2[0]}}</span>
<span>{{ Additional2[1]}}</span>
</div>
<span>{{ Additional2[2]}}</span>
</div>
<div>
<span class="italic">{{ Additional2[3]}}</span>
</div>
</div>
</div>
</section>

</main>

</div>