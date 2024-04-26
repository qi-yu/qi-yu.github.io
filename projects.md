---
layout: projects
title: SELECTED PROJECTS
slug: /projects
items:
  - title: Web App <i>Rhetorical Framing Explorator</i>
    image:
      src: /assets/img/projects/webapp.png
      alt: Rhetorical Framing Explorator
    description: Earlier NLP studies on framing in journalistic texts often oversimplify framing as a mere matter of topic coverage. However, framing is not about <i>what is said</i>, but <i>how things are said</i>. For instance, as readers we sense that these two sentences convey very different attitudes&#58; "The ruling parties do not understand what family means for the refugees" vs. "The ruling parties do not <u>even</u> understand what family means for the refugees". <br><br>However, such nuanced language usage is heavily understudied in NLP. This is partially due to the reason that NLP studies increasingly use black-box models (e.g., LLMs) that do not allow a drilling down into the effects of linguistically meaningful components. I am developing a web App which facilitates the exploration of such subtle linguistic aspects of framing. 
    resources:
      - name: (under develop)
        code: https://github.com/qi-yu/rhetorical-framing-explorator
      - name: ; see an older version without UI in Yu (2023) 
        paper: https://aclanthology.org/2023.latechclfl-1.18.pdf
        code: https://github.com/qi-yu/topical-and-rhetorical-framing

  - title: Examining Behaviors of Large Language Models
    image:
      src: /assets/img/projects/llm.png
      alt: Behaviors of LLMs
    description: LLMs are powerful and yield groundbreaking results, but model explainability is also crucial for many use cases&#58; what have they actually learned from the training data and why do they come to a certain decision? For text data, this is especially relevant for complex tasks such as the automated detection of figurative language usage, e.g., sarcasm or metaphor. <br><br> My colleagues and I probe the performance of diverse black-box LLMs and compare them with white-box (explainable) models on the task of figurative language classification. <u>Fun fact&#58;</u> for this probing task, we found that black-box models are not that unexplainable, whereas white-box models are sometimes not really human-interpretable. 
    resources:
      - name: Yu (2023)
        paper: https://aclanthology.org/2023.findings-acl.622.pdf
        code: https://github.com/CoPsyN/figurative-language-processing      
      
  - title: Large-Scale Experiments on Compound Neologisms
    image:
      src: /assets/img/projects/compounds.png
      alt: Coinage Compounds 
    description: This project is more of a cognitive science (psycholinguistics) nature. The German language is rich of compounds, and new compounds can always be derivated - you might know crazy examples like "Donaudampfschiffahrtsgesellschaftskapitän". In journalism, sometimes authors invent compounds to implicitly convey biased attitudes. <br><br>For instance, what impact on readers' perceptions does it make to call an intern who wears a hijab because of her religious background as "<u>the hijab-intern</u>" (original in German&#58; <u>Kopftuchpraktikantin</u>) instead of "<u>the intern who wears a hijab</u>" (German&#58; <u>kopftuchtragende Praktikantin</u>)? In collaboration with the University of Tübingen, I designed experiments to unravel this. 
    resources: 
      - name: Yu et al. (2024, accepted)
        code: https://github.com/qi-yu/enigmatic-compounds
---
