---
title:  A Holistic Preview of MediaPipe
author: Pratyay Banerjee
date:   2023-06-25
hero: ./images/coverx.jpg
excerpt: Exploring the scope of MediaPipe ML Library for building interactive Web Demo. 

---

## **<u style="background-image: linear-gradient(135deg, #FFA800, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Preface</u>** ⚡

This blog is dedicated to sharing the key insights and lessons I have acquired from my experience with [<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u>](https://developers.google.com/mediapipe). 

![midregion](https://github.com/google/mediapipe/assets/48355572/a8765289-5f12-4faf-982a-7edd5156fa8a "midregion")

It specifically highlights the advancements brought by the new Solutions suite & <u style="background-image: linear-gradient(135deg, #0ba13f, #0ba13f); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Tasks API</u> ([*Vision*](https://github.com/google/mediapipe/tree/master/mediapipe/tasks/web/vision)). To gain a comprehensive understanding of the subject, I strongly recommend referring to MediaPipe's official documentation, available [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://google.github.io/mediapipe/). 

Join me on my *Google Summer of Code* 2023 journey as I utilize MediaPipe to create interactive web demos. Stay tuned for exciting blog posts with experiments and valuable insights.

![dotted-bar-long](https://user-images.githubusercontent.com/48355572/263612162-32246a50-238b-48d7-aa6d-f1562b04ce3a.png)

### 🔺 A few important links to get you started:

- **<u>For more information about the project, please visit here:</u>** [**Interactive Web Demos using the MediaPipe Machine Learning Library**](https://summerofcode.withgoogle.com/programs/2023/projects/pd9KgnNP). 

- **<u>Explore my Community Bonding experience here:</u>** [**Community Bonding Period Experience**](https://blog.neilblaze.live/gsoc'23-community-bonding-period/).

- **<u>Explore what's next here</u>:** [**Predicting Custom Gestures**](https://blog.neilblaze.live/predicting-custom-gestures-for-interactive-web-demo/).

![dotted-bar-long](https://user-images.githubusercontent.com/48355572/263612162-32246a50-238b-48d7-aa6d-f1562b04ce3a.png)

![platforms_graphic](https://github.com/google/mediapipe/assets/48355572/42935264-ee4b-4003-bb3b-dc706e858983)



Many Machine Learning applications in various domains heavily depend on fundamental baseline tasks. For instance, applications involving *gestural navigation* or *sign language detection* require accurate hand tracking capabilities. However, developing a reliable hand tracking model can be a time-consuming and resource-intensive process, leading to a bottleneck in the creation of such applications. In order to overcome this challenge, **<u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">G</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #FBBC05, #FBBC05); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">g</u><u style="background-image: linear-gradient(135deg, #34A853, #34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">l</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">e</u>** has developed a solution called <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u>, which aims to streamline the development of applications that rely on hand tracking.

<br/>

## Introduction to <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u> 🦄

**MediaPipe** is a cross-platform pipeline framework to build custom machine learning solutions for live and streaming media & was open-sourced by Google. 

![mediapipe-logo](https://github.com/google/mediapipe/assets/48355572/6a4927c4-d2c5-46c6-ad5a-e3f33267a9c8)


💡 MediaPipe offers essential Machine Learning models for prevalent tasks such as hand tracking. By providing these models, MediaPipe *effectively eliminates the development bottleneck* faced by numerous Machine Learning applications. The inclusion of user-friendly APIs further simplifies the development process and reduces the overall project timeline for applications relying on Computer Vision. The official documentation states that inferencing is *real-time*, and it takes just a few lines of code to create a perception pipeline. 

![mediapipe-logo](https://github.com/google/mediapipe/assets/48355572/e9cf1e5c-3db7-4ea6-9582-9de943c6b55f)




## What is MediaPipe used for? 🤔

MediaPipe is a primarily used for *building real-time multimedia processing pipelines*. It provides tools, libraries, and pre-built components for tasks like *video analysis*, *object detection*, *facial recognition*, and *gesture recognition*, etc. MediaPipe enables efficient processing and analysis of media streams, making it ideal for applications in augmented reality, virtual reality, robotics, and machine learning. It also supports rapid prototyping of perception pipelines with AI models and facilitates deployment on various hardware platforms.

![football_tracking](https://github.com/google/mediapipe/assets/48355572/04821de1-493c-4942-a403-ad4d93ace1af)

The configuration language and evaluation tools enable teams to incrementally improve computer vision pipelines.

![mp_tracking](https://www.regens.com/documents/20182/46627/AI+1+EN.gif/7dd57f27-9828-483b-8898-96cbf3373c9c?t=1548758804960)

<center style="color: #8fa387;"> ⬆️ Fig: MediaPipe Box Tracking paired with ML inference for Object Detection </center><br/><br/>




### Who can use MediaPipe ?

MediaPipe can be used by a *wide range of users*, including developers, researchers, and engineers. It is designed to be accessible to individuals and teams working on various projects involving *multimedia processing*, *computer vision*, *machine learning*, and *AI*. Whether you are creating applications, conducting experiments, or building innovative solutions, MediaPipe provides a flexible platform for implementing and deploying your ideas.


### What are the advantages of MediaPipe ?

- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Easy to use:</u>** Self-serve ML solutions with simple-to-use abstractions. Use low-code APIs or no-code studio to customize, evaluate, prototype, and deploy.
- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Innovative:</u>** Advanced ML solutions for popular tasks, crafted with Google ML expertise.
- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">End-to-end acceleration:</u>** Use common hardware to build-in fast ML inference and video processing, including both CPU & GPU.
- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Lightweight:</u>** The framework is designed to run on mobile and edge devices with limited compute resources.
- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Cross-Platform:</u>** Build once, deploy anywhere! The unified framework is suitable for Web, Android, iOS, desktop, edge, cloud, and IoT platforms. 
- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Ready-to-use:</u>** Prebuilt ML solutions demonstrate the full power of the MediaPipe framework. 
- **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Open source and free:</u>** The framework is licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0), fully extensible, and customizable.







## A brief history of MediaPipe 📜

**MediaPipe** powers the ML in many Google products, and it's open source to help you to bring cutting-edge, performant, and scalable features to your customers. Since 2012, Google has used it internally in several products and services. It was initially developed for real-time analysis of video and audio on YouTube. Gradually it got integrated into many more products, the following are some:

![products_with_MP](https://github.com/google/mediapipe/assets/48355572/035b9703-52a0-4694-8266-f71e5ea0b2a4)

1. [**Google Meet**](https://meet.google.com) 👪
2. Object detection in [**Google Lens**](https://lens.google) 👁️
3. [**Google Photos**](https://photos.google.com) 🖼️
4. [**Google Home**](https://home.google.com/welcome) 🏠
5. Perception system in [**NestCam**](https://store.google.com/category/nest_cams) 📹

🟢 MediaPipe is the driving force behind groundbreaking products and services that we rely on in our daily lives. In contrast to resource-intensive machine learning frameworks, MediaPipe operates with *minimal resource requirements*. Its *compact* and *efficient design* allows it to be deployed even on low-powered embedded IoT devices.



## MediaPipe Toolkit 🧰

The Toolkit comprises the **Framework** and the **Solutions**. The following diagram shows the components of the MediaPipe Toolkit.

![MP-Toolkit](https://github.com/google/mediapipe/assets/48355572/58120806-a336-4d84-909a-4a6bfbcf91db)


## MediaPipe Framework

🟣 MediaPipe Framework consists of *three* main elements: 

1. A **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">framework</u>** for inference from sensory data (audio or video) 
2. A **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">set of tools</u>** for performance evaluation and visualization
3. **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Re-usable components</u>** for inference and processing (calculators) 

<br/>

🔵 The main components of MediaPipe: 

- [**<u style="background-image: linear-gradient(135deg, #eb5002, #eb1d02); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Packet</u>**](https://developers.google.com/mediapipe/framework/framework_concepts/packets): The basic data flow unit is called a “packet”. It consists of a numeric timestamp and a shared pointer to an immutable payload.

- [**<u style="background-image: linear-gradient(135deg, #eb5002, #eb1d02); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Graph</u>**](https://developers.google.com/mediapipe/framework/framework_concepts/graphs): Processing takes place inside a graph which defines the flow paths of packets between nodes. A graph can have any number of input and outputs, and branch or merge data. 

- [**<u style="background-image: linear-gradient(135deg, #eb5002, #eb1d02); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Nodes</u>**](https://developers.google.com/mediapipe/framework/framework_concepts/overview#nodes): Nodes are where the bulk of the graph’s work takes place. They are also called “calculators” (for historical reasons) and produce or consume packets. Each node’s interface defines a number of in- and output ports. 

- [**<u style="background-image: linear-gradient(135deg, #eb5002, #eb1d02); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Streams</u>**](https://developers.google.com/mediapipe/framework/framework_concepts/realtime_streams): A stream is a connection between two nodes in real-time that carries a sequence of packets with increasing timestamps. 

There are more advanced components, such as *Side packets*, *Packet ports*, *Input policies*, etc., about which you can read more [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://developers.google.com/mediapipe/framework/framework_concepts/overview). To *visualize a graph*, copy and paste the graph into the [**MediaPipe Visualizer**](https://viz.mediapipe.dev/).



### Graphs

The MediaPipe perception pipeline is called a [**Graph**](https://developers.google.com/mediapipe/framework/framework_concepts/graphs). Let us take the example of the first solution, Hands. We feed a stream of images as input which comes out with hand landmarks rendered on the images.

![graphs_MP_HANDS](https://github.com/google/mediapipe/assets/48355572/65878215-b2fd-4e8a-b0ec-39ca2f4a0253)


The flow chart below represents the MediaPipe [hand solution](https://mediapipe.readthedocs.io/en/latest/solutions/hands.html) graph.

![hand_solution_graph](https://github.com/google/mediapipe/assets/48355572/f1658427-cf6a-47d8-84dd-0d296b6071b6)

<center style="color: #8fa387;"> ⬆️ Fig: MediaPipe Hands Solution graph </center><br/><br/>


🛈 In computer science jargon, a graph consists of Nodes connected by Edges. Inside the **MediaPipe Graph**, the nodes are called [*Calculators*](https://developers.google.com/mediapipe/framework/framework_concepts/calculators), and the edges are called *Streams*. Every stream carries a sequence of [*Packets*](https://developers.google.com/mediapipe/framework/framework_concepts/packets) that have ascending time stamps. In the image above, we have represented Calculators with rectangular blocks and Streams using arrows (→). 


### Calculators

These are specific *computation units with assigned tasks* to process. The packets of data (Video frame or Audio segment) enter and leave through the <em style="font-family: 'Trebuchet MS', sans-serif;">*ports*</em> in a [calculator](https://developers.google.com/mediapipe/framework/framework_concepts/calculators). When initializing a calculator, it declares the packet payload type that will traverse the port. Every time a graph runs, the Framework implements <em style="font-family: 'Trebuchet MS', sans-serif;">*Open*</em>, <em style="font-family: 'Trebuchet MS', sans-serif;">*Process*</em>, and <em style="font-family: 'Trebuchet MS', sans-serif;">*Close*</em> methods in the calculators. *Open* initiates the calculator; the *process* repeatedly runs when a packet enters. The process is *closed* after an entire graph run.

> **ⓘ** As an example, consider the first calculator shown in the above [graph](https://blog.neilblaze.live/unveiling-mediapipe-solutions-for-interactive-web-demo-under-gsoc'23-@tensorflow#:~:text=Fig%3A%20MediaPipe%20Hands%20Solution%20graph). The calculator, <em style="font-family: 'Trebuchet MS', sans-serif;">*ImageTransform*</em>, takes an image at the input port and returns a transformed image in the output port. On the other hand, the second calculator, <em style="font-family: 'Trebuchet MS', sans-serif;">*ImageToTensor*</em>, takes an image as input and outputs a tensor. 

### Calculator Types in MediaPipe

All the calculators shown above are built-in into MediaPipe. We can group them into four categories.

1. **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Pre-processing calculators</u>** are a family of image and media-processing calculators. The *ImageTransform* and *ImageToTensors* in the graph above fall in this category.

2. **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Inference calculators</u>** allow native integration with Tensorflow and Tensorflow Lite for ML inference.

3. **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Post-processing calculators</u>** perform ML post-processing tasks such as detection, segmentation, and classification. *TensorToLandmark* is a post-processing calculator.

4. **<u style="background-image: linear-gradient(135deg, #FF6F00, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Utility calculators</u>** are a family of calculators performing final tasks such as image annotation.

The calculator APIs allow you to write your custom calculator. 



## MediaPipe Solutions 🧩

**MediaPipe Solutions** is a versatile framework based on MediaPipe for creating machine learning pipelines across platforms. It offers *customizable building blocks* for applying AI and ML techniques to your specific requirements. With MediaPipe Solutions, you can quickly integrate and customize these solutions in your applications, supporting multiple development platforms. It is available for Web (JavaScript), Python, and Android (Java), and is part of the open-source MediaPipe project, *allowing further customization* as needed.

![MediaPipe_Solutions](https://github.com/google/mediapipe/assets/48355572/faf174c4-9130-4968-9f6a-21a56d515a89 "MediaPipe Solutions")



### These libraries and resources provide the core functionality for each MediaPipe Solution:

- **<u>MediaPipe Tasks</u>:** Cross-platform APIs and libraries for deploying solutions. [Learn more](https://developers.google.com/mediapipe/solutions/tasks).
- **<u>MediaPipe Models</u>:** Pre-trained, ready-to-run models for use with each solution.


![avlble_sols](https://github.com/google/mediapipe/assets/48355572/87cd4d5c-e881-4c37-a8b8-ddd6523b47fe)


#### These tools let you customize and evaluate solutions:

- **<u>MediaPipe Model Maker</u>:** Customize models for solutions with your data. [Learn more](https://developers.google.com/mediapipe/solutions/model_maker).
- **<u>MediaPipe Studio</u>:** Visualize, evaluate, and benchmark solutions in your browser. [Learn more](https://developers.google.com/mediapipe/solutions/studio).



For our project, we will utilize Hand Landmark Detection and Gesture Recognition. Furthermore, we will customize the Gesture Recognition Model using MediaPipe [Model Maker](https://developers.google.com/mediapipe/solutions/model_maker) and incorporate the [task-vision package](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision) from MediaPipe which I'll be covering in another blog which can be accessed [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://blog.neilblaze.live/tracking-progress-for-interactive-web-demo-with-mediapipe-ml-library-under-gsoc'23-@tensorflow).

<br/>

#### ○ Notable Tasks-Vision package Classes:


| Class                    |      ‍                               Description                          |
|--------------------------|:-----------------------------------------------------------------:|
| [**DrawingUtils**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.drawingutils#drawingutils_class)         |     Helper class to visualize the result of a MediaPipe Vision task. |
| [**FilesetResolver**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.filesetresolver#filesetresolver_class)      |     Resolves the files required for the MediaPipe Task APIs.         |
| [**GestureRecognizer**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.gesturerecognizer#gesturerecognizer_class)    |     Performs hand gesture recognition on images.                     |
| [**HandLandmarker**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.handlandmarker#handlandmarker_class)       |     Performs hand landmarks detection on images.                     |

#### ○ Notable Tasks-Vision package Interfaces:

| Interfaces                        |      ‍                                 Description                                    |
|-----------------------------------|:-------------------------------------------------------------------------------------:|
| [**BoundingBox**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.boundingbox#boundingbox_interface)                   |     An integer bounding box, axis aligned.                                        |
| [**Category**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.category#category_interface)                      |     A classification category.                                                    |    
| [**Classifications**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.classifications#classifications_interface)               |     Classification results for a given classifier head.                           |
| [**Detection**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.detection#detection_interface)                     |     Represents one detection by a detection task.                                 |
| [**DetectionResult**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.detectionresult#detectionresult_interface)               |     Detection results of a model.                                                 |
| [**DrawingOptions**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.drawingoptions#drawingoptions_interface)                |     Options for customizing the drawing routines.                                 |
| [**Embedding**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.embedding#embedding_interface)                     |     List of embeddings with an optional timestamp.                                |
| [**GestureRecognizerOptions**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.gesturerecognizeroptions#gesturerecognizeroptions_interface)      |     Options to configure the MediaPipe Gesture Recognizer Task.                   |
| [**GestureRecognizerResult**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.gesturerecognizerresult#gesturerecognizerresult_interface)       |     Represents the gesture recognition results generated by `GestureRecognizer`.  |
| [**HandLandmarkerOptions**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.handlandmarkeroptions#handlandmarkeroptions_interface)         |     Options to configure the MediaPipe HandLandmarker Task.                       |
| [**HandLandmarkerResult**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.handlandmarkerresult#handlandmarkerresult_interface)          |     Represents the hand landmarks detection results generated by `HandLandmarker`.|
| [**Landmark**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.landmark#landmark_interface)                      |     Landmark represents a point in 3D space with x, y, z coordinates.             |
| [**LandmarkData**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.landmarkdata#landmarkdata_interface)                  |     Data that a user can use to specialize drawing options.                       |
| [**NormalizedLandmark**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.normalizedlandmark#normalizedlandmark_interface)            |     Represents a point in 3D space with x, y, z coordinates.                      |
| [**RegionOfInterest**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.regionofinterest#regionofinterest_interface)              |     A Region-Of-Interest (ROI) to represent a region within an image.             |

#### ○ Notable Tasks-Vision package Type Aliases:

| Type Aliases                      |      ‍                                   Description                                    |
|-----------------------------------|:------------------------------------------------------------------------------------:|
| [**Callback**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision#callback)                      |     A user-defined callback to take input data and map it to a custom output value.                                        |
| [**ImageSource**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision#imagesource)                   |     Valid types of image sources which we can run our GraphRunner over.                                         |
| [**PoseLandmarkerCallback**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision#poselandmarkercallback)        |     A callback that receives the result from the pose detector.                                     |                    




The introduction of <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u> <u style="background-image: linear-gradient(135deg, #0097A7, #0097A7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Solutions</u> brought forth a fresh set of *on-device* machine learning tools aimed at *simplifying* the developer workflow. MediaPipe Solutions provides a suite of libraries and tools for you to quickly apply artificial intelligence (AI) and machine learning (ML) techniques in your applications. You can <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**plug**</u> 🔌 these solutions into your applications immediately, <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**customize**</u> 🛠️ them to your needs, and <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**use**</u> 👨‍💻 them across multiple development platforms. These offer convenient solutions, ranging from no-code to low-code options, for common on-device machine learning tasks for platforms like Web, Mobile, Desktop, and IoT.

![NEW_MP_SOLUTIONS](https://github.com/google/mediapipe/assets/48355572/5a0890fa-58ba-486e-bc3c-0f73061bee07)



## MediaPipe Tasks API 📝

[MediaPipe Tasks](https://developers.google.com/mediapipe/solutions/tasks) simplifies *on-device* machine learning deployment for Web, Mobile, IoT, and Desktop developers through *low-code* libraries. By utilizing these libraries, developers can easily incorporate on-device machine learning solutions, as demonstrated in the aforementioned examples, into their applications with just a few lines of code. This approach eliminates the need to acquire extensive knowledge of the implementation details behind these solutions. Currently, MediaPipe Tasks offers tools across three categories: vision, audio, and text, catering to a wide range of application requirements.


The impact of the **Mediapipe Tasks API** in *real-world* projects has been remarkable. Here are the key takeaways:

1. **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Versatile and User-Friendly</u>:** The Tasks API provides developers with a versatile and easy-to-use tool for integrating Machine Learning (ML) models into their projects. With its pre-trained models, comprehensive APIs, and data processing tools, developers can efficiently leverage ML without extensive expertise in model architecture.

2. **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Solving Real-World Problems</u>:** Through the development of these projects using the Tasks API, the power of ML across various domains becomes evident. From object detection in images to audio classification and sentiment analysis, it has proven its value in automating various tasks.

3. **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Harnessing Pre-trained Models</u>:** Pre-trained models play a vital role in ML-powered projects, serving as a valuable starting point for training and saving time and resources compared to training models from scratch. The Tasks API offers a repository of pre-trained models that can be readily employed for different tasks.

4. **<u style="background-image: linear-gradient(135deg, #0cade8, #28d3fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Seamless Integration</u>:** Integrating Mediapipe with other tools and APIs is a seamless process, allowing developers to combine its capabilities with other frameworks and solutions effortlessly.


The MediaPipeTasks API offers developers an array of opportunities to harness the capabilities of *Machine Learning* in their projects. It simplifies the integration of Machine Learning with its user-friendly interface, adaptability, and availability of pre-trained models. Moreover, MediaPipe Tasks ensures consistency across various platforms, regardless of the specific task at hand. This advantage allows faster development by enabling the reuse of the same logic across different applications.


📅 In December 2022, <u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">G</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #FBBC05, #FBBC05); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">g</u><u style="background-image: linear-gradient(135deg, #34A853, #34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">l</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">e</u> introduced the <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u> preview (currently in early release), featuring *five* tasks: 


• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Gesture Recognition**</u>](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer), which lets you <u><em style="font-family: 'Trebuchet MS', sans-serif;">recognize hand gestures in real time</em></u>, and provides the recognized hand gesture results along with the landmarks of the detected hands from an image or video. You can use this task to recognize specific hand gestures from a user, and invoke application features that correspond to those gestures.

![image](https://github.com/google/mediapipe/assets/48355572/e8d0b3c0-c327-4659-bcb6-d1ac3f8a50a7)


• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Hand Landmarker**</u>](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker), which lets you <u><em style="font-family: 'Trebuchet MS', sans-serif;">detect the landmarks of the hands</em></u> in an image or video. You can use this Task to localize key points of the hands and render visual effects over the hands.

![image](https://github.com/google/mediapipe/assets/48355572/eb84a877-4447-41d3-8976-975ec0cf4668)



• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Image Classification**</u>](https://developers.google.com/mediapipe/solutions/vision/image_classifier), which lets you <u><em style="font-family: 'Trebuchet MS', sans-serif;">perform classification of multiple classes of objects</em></u> within an image or video. You can use this task to identify what an image represents among a set of categories defined at training time. 

![image](https://github.com/google/mediapipe/assets/48355572/fb2907c3-3367-4584-80b8-575e596ec95d)



• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Object Detection**</u>](https://developers.google.com/mediapipe/solutions/vision/object_detector), which lets you <u><em style="font-family: 'Trebuchet MS', sans-serif;">detect the presence and location of multiple classes of objects</em></u> within images or videos. For example, an object detector can locate dogs within in an image or video.

![image](https://github.com/google/mediapipe/assets/48355572/bb098d1b-de1a-498f-9c49-e86ae3266f20)



• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Text Classification**</u>](https://developers.google.com/mediapipe/solutions/text/text_classifier), which lets you <u><em style="font-family: 'Trebuchet MS', sans-serif;">classify text into a set of defined categories</em></u>, such as positive or negative sentiment. The categories are defined during the training of the model. 

![image](https://github.com/google/mediapipe/assets/48355572/d41330b9-4d47-4bda-8536-56b77d43e424)


🛑 **MediaPipe Solutions** are *available across multiple platforms*. Each solution includes one or more models, and you can customize models for some solutions as well. The following [list](https://developers.google.com/mediapipe/solutions/guide#available_solutions) shows what solutions are available for each supported platform and if you can use [<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u> <u style="background-image: linear-gradient(135deg, #077d8a, #3c99a3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Model Maker</u>](https://developers.google.com/mediapipe/solutions/model_maker) to customize the model:

![List_of_Avl_MP_Solutions](https://github.com/google/mediapipe/assets/48355572/ff6cd679-00c3-4aa0-82a7-39bda65346e2)

> 🛈 You can access the entire list of available solutions [here](https://developers.google.com/mediapipe/solutions/guide#available_solutions) & its corresponding GitHub repository [here](https://github.com/google/mediapipe/tree/master/docs/solutions). 

💡 Building upon this initial release, **<u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">G</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #FBBC05, #FBBC05); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">g</u><u style="background-image: linear-gradient(135deg, #34A853, #34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">l</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">e</u>** [**I/O** 2023](https://io.google/) showcased the announcement of *nine* new tasks, some of them include:

• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Face Landmarker**</u>](https://developers.google.com/mediapipe/solutions/vision/face_landmarker), which <u><em style="font-family: 'Trebuchet MS', sans-serif;">detects facial landmarks and blendshapes to determine human facial expressions</em></u>, such as smiling, raised eyebrows, and blinking. Additionally, this task is useful for *applying effects to a face in three dimensions* that matches the user’s actions.

![face_landmarker](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitCXqW27k2u8vuxiRjnsJZtIAGGuxGeKHF2gE_OHq8kAZ0xVH-G84k50RMcw0v-Ut3LHym-HQGbVT62MD9lH4EMQnaTiN8zyaeuPzfzOwEbHgXICslzDU_obP_6AkYVyMpLWuXOT_57eod_sWoYP-DYOUveWX5qVQ7nIWQdisj7QyvFipyQfK2tAuy/s1600/image4.gif)



• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Image Segmenter**</u>](https://developers.google.com/mediapipe/solutions/vision/image_segmenter), which <u><em style="font-family: 'Trebuchet MS', sans-serif;">lets you divide images into regions based on predefined categories</em></u>. You can use this functionality to *identify humans or multiple objects, then apply visual effects* like background blurring.

![image_segmenter](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1WV4aYf9VjiSizYx7dxl6rzgj7iBTDrwWJvLteZHSSnYM82Ye3bIWR8EazvvhPMdjgfN_lvCnsO6ygKCr7pYW8c9DLTDP5xabuxQA2rXxlNYtP1h6r3WOI_lDN9Lop1qvQpRIVEftozJumj9aidIX6yF7sf_p3ZyHjVqjGAkv0qAF9FUCXwBF8JQN/s1600/MediaPipe%20Solutions.gif)


• [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Interactive Segmenter**</u>](https://developers.google.com/mediapipe/solutions/vision/interactive_segmenter), which <u><em style="font-family: 'Trebuchet MS', sans-serif;">takes the region of interest in an image</em></u>, estimates the boundaries of an object at that location, and <u><em style="font-family: 'Trebuchet MS', sans-serif;">returns the segmentation for the object</em></u> as image data.

![interactive_segmenter](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQLVxTCc_A5-JQwmxcg-Mf1ZKzPKpcJYusK1gqTbH3YmqcTmL6HQX7zSbIR1lUBlMaS3h4PxipmhDMEsyQ5LWeK6GQWjZXLmhy0uWP0ByDPxpWzWIm282Jee553INxljTSFSqFeMX02B1bMzzW0mOjfRKxLaFrv_qYTD7zhY9bykyD9uGisOaJ_TC5/s1600/image1.gif)

<br/>

📅 On 29th June 2023, MediaPipe launched [<u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Image Generator**</u>](https://ai.googleblog.com/2023/06/on-device-diffusion-plugins-for.html), which enables developers to <u><em style="font-family: 'Trebuchet MS', sans-serif;">apply a diffusion model within their apps</em></u> to create visual content.

![image_generator](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgV7MOp8-3-FSJQpmuovwRm6gcc64-i3T4CW370aiey5MWHThNtr_IPedqYh0aJl9rbolgzGdV-eRf2EDlhpWZN759usJt0wbzD5Gvdhx_6yZU5x6TnunYdXBBgzovXaT0oWgWma81L49g9G8nW8sgHD95I-0_J23jkYQ4LBPYEfI2N1d8PIYsWJgFaLpY/s16000/image6.gif)

> 🛈 Feel free to explore the blog on [<u>On-device diffusion plugins for conditioned text-to-image generation</u>](https://ai.googleblog.com/2023/06/on-device-diffusion-plugins-for.html) by [**<u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">G</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #FBBC05, #FBBC05); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">g</u><u style="background-image: linear-gradient(135deg, #34A853, #34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">l</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">e</u>** AI](https://ai.googleblog.com/) which sheds more light on the [diffusion models](https://arxiv.org/pdf/2208.11970.pdf) and how they work.


Soon, they're also planning to bring <u style="background-image: linear-gradient(135deg, #4790de, #4947de); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Face Stylizer**</u>, which <u>lets you take an existing style reference and apply it to a user’s face</u> using "style transfer" method.

![face_stylizer](https://github.com/google/mediapipe/assets/48355572/b5cb277a-98de-46a1-8df9-a97694404d0a)


The MediaPipe Tasks *Web JavaScript API* is divided into packages that perform ML tasks in major domains, including [vision](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision), [natural language](https://developers.google.com/mediapipe/api/solutions/js/tasks-text), and [audio](https://developers.google.com/mediapipe/api/solutions/js/tasks-audio). The following is a [list](https://developers.google.com/mediapipe/solutions/tasks#web_and_javascript) of script imports you can add to your Web and JavaScript development project to enable these APIs:

```html
<head>

  <!-- For tasks-vision -->
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.js" 
  crossorigin="anonymous"></script>

  <!-- For tasks-text -->
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text/text-bundle.js" 
  crossorigin="anonymous"></script>

  <!-- For tasks-audio -->
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio/audio_bundle.js" 
  crossorigin="anonymous"></script>

</head>
```

> 🛈 Feel free to explore the *setup guide* for Web [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://developers.google.com/mediapipe/solutions/setup_web).

⚠️ For specific implementation details, see the *platform-specific* development [guides](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/web_js) for each solution in MediaPipe Tasks.


## MediaPipe Studio ✨

Introducing *MediaPipe Studio*, the groundbreaking tool that enables you to conveniently <em style="font-family: 'Trebuchet MS', sans-serif;">*view*</em> and <em style="font-family: 'Trebuchet MS', sans-serif;">*test*</em> MediaPipe-compatible models *directly on the Web* 🌐. With MediaPipe Studio, there's no need to develop custom testing applications.

![MP_Studio_DEMO1](./images/solutions_demo_cat.gif)

You can explore and experiment with the new tasks mentioned here and other additional features by visiting the [MediaPipe Studio](https://mediapipe-studio.webapps.google.com/home) page.

![MP_STUDIO_DEMO_FINAL](https://github.com/google/mediapipe/assets/48355572/00776009-1432-40af-95dd-be5a91d8f374)

🔜 In the future, [MediaPipe Studio](https://mediapipe-studio.webapps.google.com/home) will also offer a *no-code* model training solution, allowing you to effortlessly create new models without unnecessary complexities or overhead. Below you can find me using the MediaPipe Studio to to detect hand gestures from my **custom trained** model.

![MP_customModel_Studio_DEMO](./images/MP_studio_demo.gif)


### Visualizer Tool 📊

The [<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u> <u style="background-image: linear-gradient(135deg, #fa9b02, #ed6409); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Visualizer**</u>](https://viz.mediapipe.dev/) is a tool for understanding the topology and overall behavior of the pipelines. It provides a timeline view and a graph view. In the timeline view, the user can load a pre-recorded trace file and see the precise timings of data as it moves through threads and calculators (nodes). 

In the graph view, the user can [*visualize the topology*](https://developers.google.com/mediapipe/framework/tools/visualizer) of a graph at any point in time, including the state of each calculator and the packets being processed or being held in its input queues. The visualizer can be used to understand the behavior of a pipeline, identify bottlenecks, and debug issues.


> 🛈 It also provides an easy way to try all the solutions. 

In MediaPipe, the **protobuf** (**.pbtxt**) text file defines a graph. The MediaPipe Visualizer welcome page greets you with a protobuf file containing a blank graph unit. It has various pre-built graphs of solutions that you can load from the **New** button at the top right. 

The *visualizer works within the browser*! Let’s give it a try. The following .gif shows an in-browser <em style="color: #e610c9; font-family: 'Trebuchet MS', sans-serif;">hand detection</em> example.

![mediapipe-viz](./images/fastforward_viz_demo.gif)

<center style="color: #8fa387;"> ⬆️ Fig: MediaPipe Visualizer running on Browser </center><br/><br/>


![breaker](https://user-images.githubusercontent.com/48355572/214252830-b5c764db-25c2-451a-b74c-876423f81917.png)

## **<u style="background-image: linear-gradient(135deg, #b31af0, #611af0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Extras:</u>**


### GPU Support 🏃

MediaPipe supports GPU computing and rendering nodes and allows to combine multiple GPU nodes and mix them with CPU-based nodes. There are several GPU APIs on mobile platforms ([OpenGL](https://www.opengl.org) ES, Metal, [Vulkan](https://www.vulkan.org/), etc.)

<!-- ![gpu-meme](https://github.com/google/mediapipe/assets/48355572/b593413f-5871-40f1-9a8c-ab401736b0d3) -->

There is *no* single cross-API GPU abstraction. Individual nodes can be written using different APIs, allowing them to take advantage of platform-specific features when needed. This enables GPU and CPU nodes to provide advantages of encapsulation and composability while maintaining efficiency.


### Tracer Module 👣

The MediaPipe tracer module is responsible for capturing timing events throughout the graph, recording various data fields such as time, packet timestamp, data ID, node ID, and stream ID. It also generates histograms to track different resource metrics, including elapsed CPU time for each calculator and stream.

The tracer module can be activated on demand by configuring it through the <em style="font-family: 'Trebuchet MS', sans-serif;">**`GraphConfig`**</em> settings. Alternatively, the user can exclude the tracer module code entirely using a compiler flag.

> 💡 By recording timing data, the tracer enables the analysis and visualization of individual packet flows and calculator executions. *This data is useful for* diagnosing issues such as unexpected real-time delays*, *memory accumulation caused by packet buffering*, and *synchronization of packets with varying frame rates.

The aggregated timing data is valuable for reporting average and extreme latencies, facilitating performance tuning. Additionally, the timing data aids in identifying critical path nodes that significantly impact end-to-end latency.

![MP_Viz_with_Timeline_View](https://github.com/google/mediapipe/assets/48355572/a9515ded-fee3-4eed-b7df-2a8f67abd9c7)

<center style="color: #8fa387;"> ⬆️ Fig: MediaPipe Visualizer with Timeline view (top) and Graph view (bottom) </center><br/><br/>




### Synchronization and Performance Optimization ⚙️
**MediaPipe** offers support for multimodal graphs, where *different calculators can run concurrently in separate threads to enhance processing speed*. To optimize performance, many pre-built calculators provide options for GPU acceleration. 

<!-- ![flash-dc-2](https://github.com/google/mediapipe/assets/48355572/547bd7e0-d622-4aae-b54d-a4018c1a54d3) -->

It is crucial to synchronize time series data properly to prevent system disruptions. The graph within MediaPipe ensures that data flow is managed **accurately based on packet timestamps**. Additionally, the framework takes care of synchronization, context sharing, and inter-operations with CPU calculators.


### Dependencies 🏴󠁶󠁥󠁷󠁿
**MediaPipe** depends on [OpenCV](https://opencv.org/) for video and [FFMPEG](https://ffmpeg.org/) for audio data handling. It also has other dependencies like OpenGL/Metal, TensorFlow, Eigen, etc.


### AI models vs. Applications 🎮
Traditionally, image or video input data is obtained as separate streams and analyzed using neural networks like [TensorFlow](https://www.tensorflow.org/), [PyTorch](https://pytorch.org/), [CNTK](https://learn.microsoft.com/en-us/cognitive-toolkit), or [MXNet](https://mxnet.apache.org). These models follow a simple and deterministic approach, where each input generates a single output, enabling efficient processing. For a detailed comparison between TensorFlow and PyTorch, you can check out this [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **blog**</mark></u>](https://viso.ai/deep-learning/pytorch-vs-tensorflow).

![rec_veh_od](https://github.com/google/mediapipe/assets/48355572/cf344311-9f8d-4cfa-965c-51065f3cda34)

<center style="color: #8fa387;"> ⬆️ Credits: Google Images </center><br/>

In contrast, [MediaPipe](https://developers.google.com/mediapipe) operates at a higher-level semantic, enabling more intricate and dynamic behaviors. For instance, a single input can generate zero, one, or multiple outputs, which cannot be achieved with traditional neural networks. Video processing and AI perception necessitate streaming processing as opposed to batch methods.

> 💡 [OpenCV 4.0](https://opencv.org/blog/2018/11/20/opencv-4-0/) introduced the *Graph API*, which allows the creation of sequences of image processing operations in the form of a graph. On the other hand, MediaPipe supports operations on diverse data types and offers native support for streaming time-series data, making it more suitable for analyzing audio and sensor data.


### Is it genuinely Real-Time? 🤯

It's almost near to real-time. The inference latency & performance might vary as per different device specs.

<!-- ![realtime_meme](https://github.com/google/mediapipe/assets/48355572/4711850c-2edc-4b5c-a166-4d6b9513f152) -->

But yes, MediaPipe is designed to provide <u style="background-image: linear-gradient(135deg, #0fbf15, #0ac2b9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;"> **real-time**</u> performance. It offers efficient and optimized processing pipelines that enable real-time analysis and inference on various multimedia inputs, including video, audio, and sensor data. MediaPipe incorporates techniques such as parallel processing, hardware acceleration, and optimized algorithms to ensure fast and responsive performance, making it suitable for applications that require real-time processing capabilities.


![line-breaker](https://github.com/google/mediapipe/assets/48355572/c2a5d7fd-0fa7-470d-ab05-561bb8748394)



### References 📌

Here are the links to some of the best resources to learn more about [MediaPipe](https://developers.google.com/mediapipe):

- **<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u>** **GitHub** repository → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://github.com/google/mediapipe)

- **<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u>** Object Detection **CodePen** demo (by [Jen Person](https://github.com/jenperson)) → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://codelabs.developers.google.com/mp-object-detection-web)

- **<u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">G</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #FBBC05, #FBBC05); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">g</u><u style="background-image: linear-gradient(135deg, #34A853, #34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">l</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">e</u>** **AI** Blogs → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://ai.googleblog.com/)

- Intro to <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u> by **LearnOpenCV** → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://learnopencv.com/introduction-to-mediapipe/)

- Sign Language detection by **Sicara** → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://www.sicara.fr/blog-technique/sign-language-recognition-using-mediapipe)

- **<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u>** for dummies by **AssemblyAI** → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://www.assemblyai.com/blog/mediapipe-for-dummies)

- **<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u>** official research paper (**Arxiv**, 2020) → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://arxiv.org/pdf/2006.10214.pdf)

<br/>
<br/>

![MP_blogs](https://github.com/google/mediapipe/assets/48355572/8c77dc03-48c5-4e43-bf07-160317b42699)

- Watch Learn and build with [<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u>](https://developers.google.com/mediapipe) → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://developers.google.com/mediapipe#:~:text=Watch%2C%20learn%2C%20and%20build%20with%20MediaPipe) ✨

- Read more blogs on <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u> <u style="background-image: linear-gradient(135deg, #0097A7, #0097A7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Solutions**</u> [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://developers.googleblog.com/search/label/MediaPipe) 🌟





<!-- ![memes](https://github.com/google/mediapipe/assets/48355572/211a4615-ea1b-42ba-ad53-bc741ff31749) -->

# Conclusion 🚀

MediaPipe offers a versatile framework for live and streaming media, enabling the development of customizable machine learning solutions which can be ideal for creating computer vision pipelines and complex applications. That concludes our discussion for now! I hope you found it informative. I am grateful to my mentor(s) for providing me with this opportunity, and I will do my best to make the most of it. To stay updated on my progress, I will be posting bi-weekly updates on my [blog](https://blog.neilblaze.live/). I welcome suggestions and feedback, so please feel free to reach out to me on [<u style="background-image: linear-gradient(135deg, #1DA1F2, #1DA1F2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Twitter**</u>](https://twitter.com/@neilzblaze007) or [<u style="background-image: linear-gradient(135deg, #0077B5, #0077B5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**LinkedIn**</u>](https://www.linkedin.com/in/neilblaze). Stay tuned for more exciting blog posts! 😄