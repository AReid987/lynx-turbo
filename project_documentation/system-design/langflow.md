# ![Langflow](../../icons/langflow.svg) Langflow

## ![Workflow](../../icons/flowchart.svg) Workflow

### 1. Structured Input

- Initial Input is structured
- Variables are in place to be filled in when called
- Enables dynamic, reusable
- workflows

#### <img src="../../icons/shippingbox-circle.svg" alt="shipping-box" width="24" height="24"> Variables

`{state}`
`{cities}`
`{job_titles}`
`{pharmacy_keywords}`

### 2.<img src="../../icons/search.svg" alt="search" width="24" height="24"> Search Engines

- A Collection of search engines is used to search for information
- Searches are based on the structured input

#### <img src="../../icons/brave.svg" alt="brave" width="24" height="24"> Brave Search API

- 1 Request per second
- 2000 free searches per month

#### <img src="../../icons/tavily.svg" alt="tavily" width="24" height="24"> Tavily API

- 100 Requests per minute
- 1000 API Credits / Month

##### <img src="../../icons/search.svg" alt="search" width="24" height="24"> **Search**

| Search Depth | API Credits |
| ------------ | ----------- |
| basic        | 1           |
| advanced     | 2           |

##### <img src="../../icons/forklift.svg" alt="forklift" width="24" height="24"> **Extract**

| Extract Depth | Successfully Extracted URLS | API Credits |
| ------------- | --------------------------- | ----------- |
| basic         | 0                           | 0           |
| basic         | 5                           | 1           |
| advanced      | 0                           | 0           |
| advanced      | 5                           | 2           |

#### <img src="../../icons/serp-api.svg" alt="serpapi" width="24" height="24"> SerpAPI

- 100 Requests per Month
- Many options for APIs to call
   - e.g., Google Trends API, Apple Store API, Home Depot API, etc
   - 🔗 [serpAPI Search API Docs](https://serpapi.com/search-api)

##### <img src="../../icons/calendar-check.svg" alt="calendar-check" width="24" height="24"> **Planned Usage**:

- Deeper Searches for more specific data

### <img src="../../icons/exa.svg" alt="exa" width="24" height="24"> Exa

#### <img src="../../icons/calendar-check.svg" alt="calendar-check" width="24" height="24"> **Planned Usage**:

- [docs](https://docs.exa.ai)

- Research Assistant
- Competitor Analysis

### <img src="../../icons/analytics.svg" alt="eye" width="24" height="24"> Competitor Analysis

- Convergence Proxy
- Open Operator
- Exa
- BrwzrCTRL
