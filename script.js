document.getElementById('send-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value.trim();
    const chatOutput = document.getElementById('chat-output');

    if (!userInput) return;

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${userInput}`;
    chatOutput.appendChild(userMessage);

    // Clear input
    document.getElementById('user-input').value = '';

    // Call API
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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',
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [
                    {
                        role: "user",
                        content: userInput
                    }
                ]
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Format and display AI response
        const aiMessage = document.createElement('div');
        aiMessage.classList.add('ai-message');

        // Detect if response contains code block
        const aiContent = data.choices[0].message.content;
        if (aiContent.includes('```')) {
            // Split text and code
            const parts = aiContent.split(/```/);
            parts.forEach((part, index) => {
                if (index % 2 === 0) {
                    // Text content
                    const textParagraph = document.createElement('p');
                    textParagraph.textContent = part.trim();
                    aiMessage.appendChild(textParagraph);
                } else {
                    // Code block
                    const codeBlock = document.createElement('pre');
                    const codeElement = document.createElement('code');
                    codeElement.textContent = part.trim();
                    codeBlock.appendChild(codeElement);
                    aiMessage.appendChild(codeBlock);
                }
            });
        } else {
            aiMessage.textContent = `AI: ${aiContent}`;
        }

        chatOutput.appendChild(aiMessage);

        // Scroll to the bottom
        chatOutput.scrollTop = chatOutput.scrollHeight;
    } catch (error) {
        console.error('Error:', error);

        const errorMessage = document.createElement('div');
        errorMessage.classList.add('ai-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = `Error: ${error.message}`;
        chatOutput.appendChild(errorMessage);
    }
});
