# GroqCloud

URL Source: https://console.groq.com/docs/models

## Supported Models

GroqCloud currently supports the following models:

### [Production Models](https://console.groq.com/docs/models#production-models)

**Note:** Production models are intended for use in your production environments. They meet or exceed our high standards for speed and quality.

| MODEL ID | DEVELOPER | CONTEXT WINDOW (TOKENS) | MAX COMPLETION TOKENS | MAX FILE SIZE | MODEL CARD LINK |
| --- | --- | --- | --- | --- | --- |
| distil-whisper-large-v3-en | HuggingFace | - | - | 25 MB | [Card](https://huggingface.co/distil-whisper/distil-large-v3) |
| gemma2-9b-it | Google | 8,192 | - | - | [Card](https://huggingface.co/google/gemma-2-9b-it) |
| llama-3.3-70b-versatile | Meta | 128K | 32,768 | - | [Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md) |
| llama-3.1-8b-instant | Meta | 128K | 8,192 | - | [Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md) |
| llama-guard-3-8b | Meta | 8,192 | - | - | [Card](https://huggingface.co/meta-llama/Llama-Guard-3-8B) |
| llama3-70b-8192 | Meta | 8,192 | - | - | [Card](https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct) |
| llama3-8b-8192 | Meta | 8,192 | - | - | [Card](https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct) |
| mixtral-8x7b-32768 | Mistral | 32,768 | - | - | [Card](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1) |
| whisper-large-v3 | OpenAI | - | - | 25 MB | [Card](https://huggingface.co/openai/whisper-large-v3) |
| whisper-large-v3-turbo | OpenAI | - | - | 25 MB | [Card](https://huggingface.co/openai/whisper-large-v3-turbo) |

### [Preview Models](https://console.groq.com/docs/models#preview-models)

**Note:** Preview models are intended for evaluation purposes only and should not be used in production environments as they may be discontinued at short notice.

| MODEL ID | DEVELOPER | CONTEXT WINDOW (TOKENS) | MAX COMPLETION TOKENS | MAX FILE SIZE | MODEL CARD LINK |
| --- | --- | --- | --- | --- | --- |
| qwen-2.5-32b | Alibaba Cloud | 128K | 8,192 | - | [Card](https://huggingface.co/Qwen/Qwen2.5-32B-Instruct) |
| deepseek-r1-distill-qwen-32b | DeepSeek | 128K | 16,384 | - | [Card](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B) |
| deepseek-r1-distill-llama-70b-specdec | DeepSeek | 128K | 16,384 | - | [Card](https://console.groq.com/docs/model/deepseek-r1-distill-llama-70b) |
| deepseek-r1-distill-llama-70b | DeepSeek | 128K | - | - | [Card](https://console.groq.com/docs/model/deepseek-r1-distill-llama-70b) |
| llama-3.3-70b-specdec | Meta | 8,192 | - | - | [Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md) |
| llama-3.2-1b-preview | Meta | 128K | 8,192 | - | [Card](https://huggingface.co/meta-llama/Llama-3.2-1B) |
| llama-3.2-3b-preview | Meta | 128K | 8,192 | - | [Card](https://huggingface.co/meta-llama/Llama-3.2-3B) |
| llama-3.2-11b-vision-preview | Meta | 128K | 8,192 | - | [Card](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision) |
| llama-3.2-90b-vision-preview | Meta | 128K | 8,192 | - | [Card](https://huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct) |

Deprecated models are models that are no longer supported or will no longer be supported in the future. A suggested alternative model for you to use is listed for each deprecated model. [See our deprecated models here](https://console.groq.com/docs/deprecations)

Hosted models are directly accessible through the GroqCloud Models API endpoint using the model IDs mentioned above. You can use the `https://api.groq.com/openai/v1/models` endpoint to return a JSON list of all active models:

```python
import requests
import os

api_key = os.environ.get("GROQ_API_KEY")
url = "https://api.groq.com/openai/v1/models"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)

print(response.json())
```
