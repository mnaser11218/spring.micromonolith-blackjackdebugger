FROM openjdk:8
RUN mvn package
COPY ./target/micromonolith-blackjackdebugger-1.0.0.jar ./micromonolith-blackjackdebugger-1.0.0.jar
CMD ["java","-jar","micromonolith-blackjackdebugger-1.0.0.jar"]
