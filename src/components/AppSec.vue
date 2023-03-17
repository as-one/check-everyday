<template>
  <section class="container content">
    <h2>Concepts</h2>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>App Sec Four Pillars</h3>
        <table>
          <tr>
            <td>Code Auditing</td>
          </tr>
          <tr>
            <td>Fuzzing</td>
          </tr>
          <tr>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>Exploitation</td>
          </tr>
        </table>

        <h3>Principles of Protection</h3>
        <table>
          <tr>
            <td>1. Least privilege</td>
          </tr>
          <tr>
            <td>2. Defense in depth</td>
          </tr>
          <tr>
            <td>3. Fail secure / Fail safe</td>
          </tr>
          <tr>
            <td>4. Complete mediation</td>
          </tr>
          <tr>
            <td>5. Session management</td>
          </tr>
          <tr>
            <td>6. Open design</td>
          </tr>
          <tr>
            <td>7. Psychological acceptability</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Principles</h3>
        <table>
          <tr>
            <td>CIA</td>
            <td>
              <ul>
                <li>Confidentiality: keeping things safe</li>
                <li>Integrity: data is current, correct, and accurate</li>
                <li>Availability: data is available</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Assume breach</td>
            <td></td>
          </tr>
          <tr>
            <td>Insider threats</td>
            <td></td>
          </tr>
          <tr>
            <td>Defense in depth</td>
            <td>
              <p>Security Layers:</p>
              <ul>
                <li>Outer: Web Application Firewall (WAF)</li>
                <li>Security Testing</li>
                <li>Inner: Secure Coding Practices</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Least Privilege</td>
            <td></td>
          </tr>
          <tr>
            <td>Supply Chain Security</td>
            <td>Dependencies</td>
          </tr>
          <tr>
            <td>Security through Obscurity</td>
            <td></td>
          </tr>
          <tr>
            <td>Attack Surface Reduction</td>
            <td></td>
          </tr>
          <tr>
            <td>Hard Coding</td>
            <td>Avoid it at all costs</td>
          </tr>
          <tr>
            <td>Never Trust, Always Verify</td>
            <td></td>
          </tr>
          <tr>
            <td>Usable Security</td>
            <td>Security must not depreciate usability</td>
          </tr>
          <tr>
            <td>Factors of Authentication</td>
            <td>
              <ul>
                <li>Multi-factor: User/Pass + Physical</li>
                <li>Not MFA: User/Pass + Question</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Shift Left</td>
            <td></td>
          </tr>
          <tr>
            <td>Risk Calculation and Impact</td>
            <td></td>
          </tr>
          <tr>
            <td>Data Governance and Privacy</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h2>Vulnerabilities</h2>

        <h3>Most Common</h3>
        <table>
          <tr>
            <td>Race Condition</td>
          </tr>
          <tr>
            <td>Buffer Overflow</td>
          </tr>
          <tr>
            <td>Auth</td>
          </tr>
          <tr>
            <td>Improper Error Handling</td>
          </tr>
          <tr>
            <td>Improper Headers</td>
          </tr>
          <tr>
            <td>Code Signing</td>
          </tr>
          <tr>
            <td>Vulnerable Components</td>
          </tr>
          <tr>
            <td>Software Composition</td>
          </tr>
          <tr>
            <td>Privilege Escalation</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-4">
        <h2>Attacks</h2>

        <h3>Application Attacks</h3>
        <table>
          <tr>
            <td>Supply Chain Attack</td>
          </tr>
          <tr>
            <td>Directory Traversals</td>
          </tr>
          <tr>
            <td>Dirbuster</td>
          </tr>
          <tr>
            <td>SQL Injection</td>
          </tr>
          <tr>
            <td>XML Injection</td>
          </tr>
          <tr>
            <td>Other: LDAP, Command, Process Injection</td>
          </tr>
        </table>

        <h3>Browser-based Attacks</h3>
        <table>
          <tr>
            <td>CSRF</td>
          </tr>
          <tr>
            <td>XSS</td>
          </tr>
          <tr>
            <td>Clickjacking</td>
          </tr>
          <tr>
            <td>MitM</td>
          </tr>
          <tr>
            <td>Session Hijacking</td>
          </tr>
          <tr>
            <td>SSRF</td>
          </tr>
          <tr>
            <td>Deserialization</td>
          </tr>
        </table>

        <h3>Cloud Attacks</h3>
        <table>
          <tr>
            <td>Credential Harvesting</td>
          </tr>
          <tr>
            <td>Misconfigured Assets</td>
          </tr>
          <tr>
            <td>Metadata Service Attack</td>
          </tr>
          <tr>
            <td>SDK</td>
          </tr>
        </table>

        <h3>Network Attacks</h3>
        <table>
          <tr>
            <td>DoS / DDoS / ReDoS</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-4">
        <h2>Tooling</h2>

        <h3>Most Used</h3>
        <table>
          <tr>
            <td>DAST</td>
          </tr>
          <tr>
            <td>SAST</td>
          </tr>
          <tr>
            <td>SCA</td>
          </tr>
          <tr>
            <td>Web Proxies</td>
          </tr>
          <tr>
            <td>Fuzzers</td>
          </tr>
          <tr>
            <td>WAF</td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>RASP (Runtime)</td>
          </tr>
          <tr>
            <td>IAST (Interactive)</td>
          </tr>
          <tr>
            <td>Service Mesh</td>
          </tr>
          <tr>
            <td>API Gateway</td>
          </tr>
          <tr>
            <td>Least privilege automation tools</td>
          </tr>
          <tr>
            <td>Package management proxies</td>
          </tr>
          <tr>
            <td>App and asset inventory tools</td>
          </tr>
          <tr>
            <td>Your custom tools</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h2>Processes</h2>

        <div class="row">
          <div class="col-sm-12">
            <h3>SDLC</h3>
            <table>
              <tr>
                <td>1</td>
                <td>Requirements</td>
                <td>Security requirements, Security user stories, Secure review of tech stack</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Design</td>
                <td>Threat modelling, Design review, Secure design principles applied</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Code</td>
                <td>Code review, SAST, DAST, SCA, Linting, Security unit tests, Secure coding</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Test</td>
                <td>Pentesting, DAST, Code review, SAST, SCA, Secret scanning</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Deploy / Maintain</td>
                <td>WAF, RASP, Monitoring logging, Alerting, Incident response</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-4">
            <h3>Activities</h3>
            <table>
              <tr>
                <td>Running vulnerability</td>
              </tr>
              <tr>
                <td>Security / vulnerability assessments</td>
              </tr>
              <tr>
                <td>Threat modelling</td>
              </tr>
              <tr>
                <td>Secure code reviews</td>
              </tr>
              <tr>
                <td>SCA</td>
              </tr>
              <tr>
                <td>Pentesting</td>
              </tr>
              <tr>
                <td>Responsible / coordinated disclosure</td>
              </tr>
              <tr>
                <td>Bug bounty programs</td>
              </tr>
              <tr>
                <td>Developer education and advocacy programs</td>
              </tr>
              <tr>
                <td>Policies, guidelines, and standards</td>
              </tr>
              <tr>
                <td>Proper security tooling</td>
              </tr>
              <tr>
                <td>Red teaming</td>
              </tr>
              <tr>
                <td>Reviewing</td>
              </tr>
            </table>
          </div>
          <div class="col-sm-12 col-md-4">
            <h3>Responding to a risk</h3>
            <table>
              <tr>
                <td>1. Remove the risk</td>
              </tr>
              <tr>
                <td>2. Change the likelihood of occurence</td>
              </tr>
              <tr>
                <td>3. Change the impact</td>
              </tr>
              <tr>
                <td>4. Share the risk</td>
              </tr>
              <tr>
                <td>5. Accept and monitor</td>
              </tr>
            </table>

            <h3>Logging and Monitoring</h3>
            <table>
              <tr>
                <td>1. Record</td>
              </tr>
              <tr>
                <td>2. Detect</td>
              </tr>
              <tr>
                <td>3. Respond</td>
              </tr>
            </table>
          </div>
          <div class="col-sm-12 col-md-4">
            <h3>Hacking Fundamentals</h3>
            <table>
              <tr>
                <td>Navigating</td>
              </tr>
              <tr>
                <td>Content Discovery</td>
              </tr>
              <tr>
                <td>Subdomain Enumeration</td>
              </tr>
              <tr>
                <td>Authentication Bypass</td>
              </tr>
              <tr>
                <td>IDOR</td>
              </tr>
              <tr>
                <td>File inclusion</td>
              </tr>
              <tr>
                <td>SSRF</td>
              </tr>
              <tr>
                <td>CSRF</td>
              </tr>
              <tr>
                <td>Command Injection</td>
              </tr>
              <tr>
                <td>SQL Injection</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <h2>OWASP</h2>

    <div class="row">
      <div class="col-sm-12 col-md-3">
        <h3>Top Ten</h3>
        <table>
          <tr>
            <td>A01</td>
            <td>Broken Access Control</td>
          </tr>
          <tr>
            <td>A02</td>
            <td>Cryptographic Failures</td>
          </tr>
          <tr>
            <td>A03</td>
            <td>Injection</td>
          </tr>
          <tr>
            <td>A04</td>
            <td>Insecure Design</td>
          </tr>
          <tr>
            <td>A05</td>
            <td>Security Misconfiguration</td>
          </tr>
          <tr>
            <td>A06</td>
            <td>Vulnerable and Outdated Components</td>
          </tr>
          <tr>
            <td>A07</td>
            <td>Identification and Authentication Failures</td>
          </tr>
          <tr>
            <td>A08</td>
            <td>Software and Data Integrity Failures</td>
          </tr>
          <tr>
            <td>A09</td>
            <td>Security Logging and Monitoring Failures</td>
          </tr>
          <tr>
            <td>A10</td>
            <td>Server-Side Request Forgery (SSRF)</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-3">
        <h3>ASVS</h3>
        <table>
          <tr>
            <td>V1</td>
            <td>Architecture, Design and Threat Modeling</td>
          </tr>
          <tr>
            <td>V2</td>
            <td>Authentication</td>
          </tr>
          <tr>
            <td>V3</td>
            <td>Session Management</td>
          </tr>
          <tr>
            <td>V4</td>
            <td>Access Control</td>
          </tr>
          <tr>
            <td>V5</td>
            <td>Validation, Sanitization and Encoding</td>
          </tr>
          <tr>
            <td>V6</td>
            <td>Stored Cryptography</td>
          </tr>
          <tr>
            <td>V7</td>
            <td>Error Handling and Logging</td>
          </tr>
          <tr>
            <td>V8</td>
            <td>Data Protection</td>
          </tr>
          <tr>
            <td>V9</td>
            <td>Communications</td>
          </tr>
          <tr>
            <td>V10</td>
            <td>Malicious Code</td>
          </tr>
          <tr>
            <td>V11</td>
            <td>Business Logic</td>
          </tr>
          <tr>
            <td>V12</td>
            <td>File and Resources</td>
          </tr>
          <tr>
            <td>V13</td>
            <td>API and Web Service</td>
          </tr>
          <tr>
            <td>V14</td>
            <td>Configuration</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-3">
        <h3>Proactive Controls</h3>
        <table>
          <tr>
            <td>C1</td>
            <td>Define Security Requirements</td>
          </tr>
          <tr>
            <td>C2</td>
            <td>Leverage Security Frameworks and Libraries</td>
          </tr>
          <tr>
            <td>C3</td>
            <td>Secure Database Access</td>
          </tr>
          <tr>
            <td>C4</td>
            <td>Encode and Escape Data</td>
          </tr>
          <tr>
            <td>C5</td>
            <td>Validate All Inputs</td>
          </tr>
          <tr>
            <td>C6</td>
            <td>Implement Digital Identity</td>
          </tr>
          <tr>
            <td>C7</td>
            <td>Enforce Access Controls</td>
          </tr>
          <tr>
            <td>C8</td>
            <td>Protect Data Everywhere</td>
          </tr>
          <tr>
            <td>C9</td>
            <td>Implement Security Logging and Monitoring</td>
          </tr>
          <tr>
            <td>C10</td>
            <td>Handle All Errors and Exceptions</td>
          </tr>
        </table>
      </div>
      <div class="col-sm-12 col-md-3">
        <h3>WSTG</h3>
        <table>
          <tr>
            <td>4.1</td>
            <td>Information Gathering</td>
          </tr>
          <tr>
            <td>4.2</td>
            <td>Configuration and Deployment Management Testing</td>
          </tr>
          <tr>
            <td>4.3</td>
            <td>Identity Management Testing</td>
          </tr>
          <tr>
            <td>4.4</td>
            <td>Authentication Testing</td>
          </tr>
          <tr>
            <td>4.5</td>
            <td>Authorization Testing</td>
          </tr>
          <tr>
            <td>4.6</td>
            <td>Session Management Testing</td>
          </tr>
          <tr>
            <td>4.7</td>
            <td>Input Validation Testing</td>
          </tr>
          <tr>
            <td>4.8</td>
            <td>Testing for Error Handling</td>
          </tr>
          <tr>
            <td>4.10</td>
            <td>Business Logic Testing</td>
          </tr>
          <tr>
            <td>4.11</td>
            <td>Client-side Testing</td>
          </tr>
          <tr>
            <td>4.12</td>
            <td>API Testing</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
