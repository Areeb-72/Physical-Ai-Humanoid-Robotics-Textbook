---
title: "Nodes, Topics, Services, and Actions"
sidebar_position: 2
difficulty: intermediate
ai_native: true
---

# ROS 2 Communication: Nodes, Topics, Services, and Actions

In ROS 2, the true power of its distributed architecture is realized through a set of well-defined communication mechanisms. These mechanisms allow independent processes (nodes) to interact, exchange data, and coordinate actions, forming the complex behaviors of a robotic system. Understanding these core concepts—Nodes, Topics, Services, and Actions—is fundamental to developing robust ROS 2 applications.

## Nodes: The Modular Units of Computation

A **node** is an executable process in ROS 2 that performs a specific computational task. Think of it as a single, modular program dedicated to one function, such as:
*   A camera driver node that publishes image data.
*   A localization node that processes sensor data to estimate the robot's position.
*   A motor control node that sends commands to actuators.

Nodes are designed to be small, independent, and reusable. They can be started, stopped, and restarted independently without affecting the rest of the system. This modularity simplifies development, debugging, and deployment.

## Topics: Asynchronous Data Streaming (Publish/Subscribe)

**Topics** provide a mechanism for asynchronous, many-to-many, real-time data streaming using a publish/subscribe messaging pattern. This is ideal for continuous streams of data, such as sensor readings, robot state information, or command velocities.

*   **Publishers:** A node that produces data sends (publishes) messages to a named topic.
*   **Subscribers:** One or more nodes interested in that data can subscribe to the topic and receive all messages published to it.

This decoupled communication means publishers and subscribers don't need to know about each other directly. They only need to agree on the topic name and the **message type** being exchanged.

**Example:**
*   A `camera_node` might publish `sensor_msgs/Image` messages to the `/camera/image_raw` topic.
*   A `vision_processing_node` subscribes to `/camera/image_raw` to receive images for object detection.
*   A `display_node` also subscribes to `/camera/image_raw` to show a live feed.

## Services: Synchronous Request/Response (One-to-One)

**Services** implement a synchronous request/response communication pattern, designed for one-to-one interactions where a client node sends a request to a service server and waits for a single, immediate response. This is suitable for tasks that have a clear start and end, and where the client needs a result before proceeding.

*   **Service Server:** A node that offers a specific service. It defines a **service type** that specifies the structure of the request and response messages.
*   **Service Client:** A node that makes a request to a service server.

**Example:**
*   A `robot_manager_node` might offer a `/set_led_color` service.
*   A `user_interface_node` acts as a client, sending a request with a desired color to the `/set_led_color` service, and waiting for confirmation that the color has been set.

## Actions: Long-Running Asynchronous Tasks (Goal/Feedback/Result)

**Actions** are designed for long-running, goal-oriented tasks that may take a significant amount of time to complete and require continuous feedback during execution. They combine aspects of topics (for feedback) and services (for a final result).

*   **Action Client:** Sends a **goal** to an action server and can optionally receive **feedback** during execution, eventually receiving a **result**.
*   **Action Server:** Accepts goals, provides continuous feedback about its progress, and sends a final result upon completion (or failure).

**Example:**
*   An `action_client_node` sends a goal to a `navigation_action_server` requesting the robot to go to a specific (`x, y, z`) pose.
*   The `navigation_action_server` provides continuous feedback to the client about the robot's current position and estimated time to arrival.
*   Once the robot reaches the destination, the `navigation_action_server` sends a final result (e.g., "success" or "failed to reach target").

## Parameters: Dynamic Node Configuration

While not a communication mechanism in the same vein as topics, services, or actions, **parameters** are crucial for dynamically configuring nodes. Nodes can declare and manage parameters (e.g., a camera node might have a `frame_rate` parameter), which can be set and retrieved at runtime by other nodes or command-line tools. This allows for flexible adjustment of node behavior without recompiling code.

By combining these communication primitives, developers can architect highly sophisticated and adaptable robotic systems using ROS 2. The choice of which mechanism to use depends on the specific requirements of the interaction, such as whether continuous data streaming, a synchronous request, or a long-running task with feedback is needed.