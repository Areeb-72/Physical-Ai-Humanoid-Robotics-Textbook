---
title: "ROS 2 Architecture"
sidebar_position: 3
difficulty: intermediate
ai_native: true
---

# ROS 2 Architecture: Unpacking the Robotic Operating System

ROS 2's distributed architecture is crucial for building complex, modular, and scalable robotic systems, abstracting networking and concurrency. Understanding this structure is key to robust robot software development.

## The Core: Data Distribution Service (DDS)

ROS 2's communication relies on the **Data Distribution Service (DDS)**, an OMG standard for high-performance, real-time, publish-subscribe middleware. DDS operates peer-to-peer, enabling direct, decentralized data flow between publishers and subscribers without a central server.

Key DDS aspects in ROS 2:
*   **Decentralized Communication:** Nodes self-discover and communicate directly, enhancing robustness and latency.
*   **Quality of Service (QoS) Profiles:** Fine-grained control over communication parameters (reliability, durability, liveliness) is exposed and configurable in ROS 2.
*   **Vendor Agnostic:** Support for multiple DDS implementations (e.g., Fast DDS, Cyclone DDS) offers flexibility.

## ROS Client Libraries (RCL): Bridging to DDS

Developers interact with ROS 2 through **ROS Client Libraries (RCLs)**, which provide high-level APIs abstracting DDS complexity. This allows node development, topic publishing, service calls, and action interactions using familiar programming constructs.

Common RCLs:
*   **`rclcpp` (C++):** For high performance, computationally intensive tasks, and critical hardware interfaces.
*   **`rclpy` (Python):** For ease of use, rapid prototyping, high-level logic, and AI/ML integration.

These libraries ensure consistent underlying communication regardless of the programming language.

## The ROS 2 Graph: A Logical System View

The **ROS 2 Graph** comprises all active nodes, their publishers, subscribers, service/action clients/servers, and their interconnections. It visually represents data and control flow within the robotic system.

> **Diagram Reference:** A conceptual diagram of a ROS 2 graph might show rectangular "Nodes" connected by lines. A line labeled "Topic: sensor_data" (publisher-subscriber) or "Service: calculate_path" (request/response) with appropriate arrows illustrates communication. Actions could be represented by a complex interaction with "Goal," "Feedback," and "Result" labels.

Tools like `rqt_graph` dynamically visualize this graph, aiding debugging, monitoring, and understanding complex system behavior.

## Launch Files: Orchestrating the System

**Launch files** (Python-based) provide a powerful way to start and configure multiple ROS 2 nodes, parameters, and remappings simultaneously. They are crucial for defining reproducible, deployable robot system configurations.

Key features:
*   **Node Execution:** Define which nodes to run from specific packages.
*   **Parameter Management:** Set initial node parameters.
*   **Remapping:** Change topic/service/action names without code modification for flexible integration.
*   **Conditional Execution:** Start nodes based on conditions.
*   **Event Handling:** React to launch events.

## Build System: Colcon

**Colcon** is ROS 2's standard command-line build tool, efficiently discovering, building, and testing multiple packages in a workspace while managing dependencies.

## Putting It Together: A Simple Robotic System

A mobile robot with a camera and motors exemplifies ROS 2 architecture:
*   A `camera_node` (C++) publishes `sensor_msgs/Image` to `/image_raw` via `rclcpp`.
*   A `detector_node` (Python) subscribes to `/image_raw`, processes obstacles, and publishes `geometry_msgs/Twist` commands to `/cmd_vel` via `rclpy`.
*   A `motor_control_node` (C++) subscribes to `/cmd_vel` to command motors, potentially offering a `/reset_odometry` service.

A Python launch file starts and configures these nodes, demonstrating how ROS 2 facilitates an interconnected, autonomous system.