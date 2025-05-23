---
layout: projects
title: Selected Projects
slug: /projects
items:
  - title: Web App <i>Rhetorical Framing Explorator</i>
    image:
      src: /assets/img/projects/webapp.png
      alt: Rhetorical Framing Explorator
    description: Earlier NLP studies on framing in journalistic texts often oversimplify framing as a mere matter of topic coverage. However, framing is not about <i>what is said</i>, but <i>how things are said</i>. For instance, these two sentences convey very different attitudes&#58; "The ruling parties do not understand what family means" vs. "The ruling parties do not <u>even</u> understand what family means". <br><br>However, such nuanced language usage is heavily understudied in NLP. This is partially due to the reason that NLP studies increasingly use black-box models (e.g., LLMs) that do not allow a drilling down into the effects of linguistically meaningful components. I developed a web App which facilitates the exploration of such subtle linguistic aspects of framing. 
    tags:
      - badge: https://img.shields.io/badge/Angular-grey?logo=Angular&logoSize=auto&labelColor=red
      - badge: https://img.shields.io/badge/Python-grey?logo=Python&logoSize=auto&labelColor=yellow
      - badge: https://img.shields.io/badge/Flask-grey?logo=Flask&logoSize=auto&labelColor=blue
      - badge: https://img.shields.io/badge/PostgreSQL-grey?logo=PostgreSQL&logoSize=auto&labelColor=white
      - badge: https://img.shields.io/badge/Docker-grey?logo=Docker&labelColor=pink
        
    resources:
      - name: 
        code: https://github.com/qi-yu/rhetorical-framing-explorator

  - title: Examining Behaviors of Large Language Models
    image:
      src: /assets/img/projects/llm.png
      alt: Behaviors of LLMs
    description: LLMs are powerful and yield groundbreaking results, but model explainability is also crucial for many use cases&#58; what have they actually learned from the training data and why do they come to a certain decision? For text data, this is especially relevant for complex tasks such as the automated detection of figurative language usage, e.g., sarcasm or metaphor. <br><br> My colleagues and I probe the performance of diverse black-box LLMs and compare them with white-box (explainable) models on the task of figurative language classification. <u>Fun fact&#58;</u> for this probing task, we found that black-box models are not that unexplainable, whereas white-box models are sometimes not really human-interpretable. 
    tags:
      - badge: https://img.shields.io/badge/%20Hugging%20Face-grey?logo=Huggingface&logoSize=auto&labelColor=black
      - badge: https://img.shields.io/badge/Python-grey?logo=Python&logoSize=auto&labelColor=yellow
      - badge: https://img.shields.io/badge/R-grey?logo=R&logoSize=auto&labelColor=purple
    resources:
      - name: Yu et al. (2023)
        paper: https://aclanthology.org/2023.findings-acl.622.pdf
        code: https://github.com/CoPsyN/figurative-language-processing      
      
  - title: Large-Scale Experiments on Compound Neologisms
    image:
      src: /assets/img/projects/compounds.png
      alt: Coinage Compounds 
    description: This project is more of a cognitive science (psycholinguistics) nature. The German language is rich of compounds, and new compounds can always be derivated. In journalism, sometimes authors invent compounds to implicitly convey biased attitudes. <br><br>For instance, what impact on readers' perceptions does it make to call an intern who wears a hijab due to her religious background as "<u>the hijab-intern</u>" (German&#58; <u>Kopftuchpraktikantin</u>) instead of "<u>the intern who wears a hijab</u>" (German&#58; <u>kopftuchtragende Praktikantin</u>)? In collaboration with the University of Tübingen, I designed experiments to unravel this. 
    tags:
      - badge: https://img.shields.io/badge/OpenAI-grey?logo=OpenAI&logoSize=auto&labelColor=green
      - badge: https://img.shields.io/badge/Python-grey?logo=Python&logoSize=auto&labelColor=yellow
      - badge: https://img.shields.io/badge/R-grey?logo=R&logoSize=auto&labelColor=purple
    resources: 
      - name: Yu et al. (2024)
        paper: https://aclanthology.org/2024.mwe-1.27.pdf
        code: https://github.com/qi-yu/enigmatic-compounds
---
