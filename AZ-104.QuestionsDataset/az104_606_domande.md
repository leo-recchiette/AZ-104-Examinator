# Microsoft AZ-104 - 606 domande con risposte

Generato dal PDF Examice. Campo `source`: `text_layer` = estratto dal testo del PDF e validato due volte; `manual_vision` = letto a mano dall'immagine; `ocr` = letto automaticamente dall'immagine, da ricontrollare in caso di dubbio.

---

## Domanda 1
*Tipo: multiple_choice · fonte: text_layer*

Your company has serval departments. Each department has a number of virtual machines (VMs). The company has an Azure subscription that contains a resource group named RG1. All VMs are located in RG1. You want to associate each VM with its respective department. What should you do?

- **A.** Create Azure Management Groups for each department.
- **B.** Create a resource group for each department.
- **C.** Assign tags to the virtual machines. **← CORRETTA**
- **D.** Modify the settings of the virtual machines.

**Risposta corretta:** C

**Spiegazione:** To associate each virtual machine with its respective department in Azure, you should use tags. Tags in Azure are name/value pairs that can be assigned to resources such as virtual machines. By assigning tags that correspond to department names, you can easily categorize and identify which VMs belong to which departments without needing to modify the existing resource group structure or VM settings. Q1 · June 30, 2026 1/951

---

## Domanda 2
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi- Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the multi-factor authentication page to alter the user settings. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Accessing the multi-factor authentication page to alter user settings allows you to configure multi- factor authentication requirements for users. However, to meet the goal of requiring members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when connecting to Azure AD from untrusted locations, you need to create a conditional access policy in Azure AD. Conditional access policies allow you to specify conditions, such as the user's group membership and their device's joining status, and enforce specific access controls based on these conditions. Q2 · June 30, 2026 2/951

---

## Domanda 3
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi- Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the Azure portal to alter the session control of the Azure AD conditional access policy. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal because altering the session control of the Azure AD conditional access policy is not sufficient to enforce the required conditions for Multi-Factor Authentication and Azure AD-joined devices. To meet the goal, the policy should be configured by altering the grant control, not the session control. The grant control allows administrators to enforce access requirements such as Multi-Factor Authentication and device compliance, which are necessary for ensuring that members of the Global Administrators group use an Azure AD-joined device and MFA when connecting from untrusted locations. Q3 · June 30, 2026 3/951

---

## Domanda 4
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi- Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal. While altering the grant control of the Azure AD conditional access policy in the Azure portal can be part of the solution, it is not sufficient on its own. The policy needs to be configured with specific conditions and controls to require Multi-Factor Authentication (MFA) and the use of an Azure AD-joined device when connecting from untrusted locations. Altering the grant control alone does not cover these requirements; conditions must also be set to specify untrusted locations. Therefore, the correct answer is No. Q4 · June 30, 2026 4/951

---

## Domanda 5
*Tipo: multiple_choice · fonte: text_layer*

You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription. You are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA). Which of the following should you use to create the virtual machine?

- **A.** The New-AzureRmVm cmdlet.
- **B.** The New-AzVM cmdlet.
- **C.** The Create-AzVM cmdlet.
- **D.** The az vm create command. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To deploy an Ubuntu Server virtual machine in Azure with a custom deployment that includes adding a particular trusted root certification authority (CA), you should use the 'az vm create' command. This command, part of the Azure CLI (Command-Line Interface), supports various customization options, including the use of cloud-init scripts for configuration, which can handle the installation of a trusted root CA as part of the VM's initialization process. The other cmdlets mentioned either do not exist or do not provide the required level of customization. Using 'az vm create', you can employ the -- custom-data parameter to provide your cloud-init script, facilitating the custom deployment. Q5 · June 30, 2026 5/951

---

## Domanda 6
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model. After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication. To achieve this, the Per Enabled User setting must be set for the usage model. Solution: You reconfigure the existing usage model via the Azure portal. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal. You cannot change the usage model (per enabled user or per authentication) after a Multi-Factor Authentication (MFA) provider is created in Azure. Instead, you need to create a new MFA provider with the desired usage model settings to accommodate the new employees. Q6 · June 30, 2026 6/951

---

## Domanda 7
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model. After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication. To achieve this, the Per Enabled User setting must be set for the usage model. Solution: You reconfigure the existing usage model via the Azure CLI. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal. Once a Multi-Factor Authentication provider is created, its usage model cannot be changed from 'Per Authentication' to 'Per Enabled User.' To achieve the goal of ensuring new employees use Multi-Factor Authentication under the 'Per Enabled User' setting, a new MFA provider would need to be created and activated with the new settings. Reconfiguring the existing usage model via the Azure CLI is not possible for changing the usage model. Q7 · June 30, 2026 7/951

---

## Domanda 8
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model. After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication. To achieve this, the Per Enabled User setting must be set for the usage model. Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi- Factor Authentication provider data. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Creating a new Multi-Factor Authentication provider does not meet the goal of changing the MFA usage model from 'Per Authentication' to 'Per Enabled User.' Azure AD MFA usage models are immutable once an MFA provider is created, and as of September 1, 2018, new MFA providers cannot be created. Thus, the existing setup must be used with appropriate licenses that include MFA features. Q8 · June 30, 2026 8/951

---

## Domanda 9
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active Directory domain.You have a server named DirSync1 that is configured as a DirSync server.You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately. Solution: You run the `Start-ADSyncSyncCycle -PolicyType Initial` PowerShell cmdlet. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Running the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet initiates a full synchronization cycle. While this does replicate user information from on-premises Active Directory to Azure AD, it is not the most efficient method for immediate replication. The initial synchronization can take a considerable amount of time, especially if there are many changes or a large directory. For immediate replication of the newly created user account, the Start-ADSyncSyncCycle -PolicyType Delta cmdlet should be used instead. This delta synchronization only replicates the changes since the last synchronization, making it faster and more suitable for immediate needs. Q9 · June 30, 2026 9/951

---

## Domanda 10
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active Directory domain.You have a server named DirSync1 that is configured as a DirSync server.You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately. Solution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal because using Active Directory Sites and Services to force replication of the Global Catalog on a domain controller does not directly impact the synchronization process with Azure Active Directory. To replicate the new user information to Azure AD immediately, you should use Azure AD Connect, the synchronization tool designed for integrating on-premises Active Directory with Azure AD. A manual synchronization cycle needs to be triggered using Azure AD Connect to achieve the desired result. Q10 · June 30, 2026 10/951

---

## Domanda 11
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active Directory domain. You have a server named DirSync1 that is configured as a DirSync server. You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately. Solution: You restart the NetLogon service on a domain controller. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution of restarting the NetLogon service on a domain controller does not meet the goal of immediately replicating the new user account information to Azure AD. The NetLogon service handles domain user login authentication and does not play a role in Azure AD synchronization. To replicate the user information to Azure AD immediately, you should manually run a synchronization cycle using the Azure AD Connect tool. This can be done using the PowerShell command Start- ADSyncSyncCycle with the PolicyType parameter set to Delta for a quick sync or Initial for a full sync. Q11 · June 30, 2026 11/951

---

## Domanda 12
*Tipo: multiple_choice · fonte: text_layer*

Your company has a Microsoft Azure subscription. The company has datacenters in Los Angeles and New York. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option. You have the following data storage requirements: Data must be stored on multiple nodes. Data must be stored on nodes in separate geographic locations. Data can be read from the secondary location as well as from the primary location. Which of the following Azure stored redundancy options should you recommend?

- **A.** Geo-redundant storage
- **B.** Read-only geo-redundant storage **← CORRETTA**
- **C.** Zone-redundant storage
- **D.** Locally redundant storage

**Risposta corretta:** B

**Spiegazione:** Read-only geo-redundant storage (RA-GRS) is the appropriate choice because it ensures data is stored on multiple nodes and in geographically separate locations. Additionally, this option allows data to be read from both the primary and secondary locations, meeting the specified requirements for site resiliency and read access from the secondary location. Q12 · June 30, 2026 12/951

---

## Domanda 13
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account. You want to review the ARM template that was used by Jon Ross. Solution: You access the Virtual Machine blade. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To review the ARM template used by Jon Ross to deploy a virtual machine and an additional Azure Storage account, one must access the Resource Group blade. The Virtual Machine blade only provides information specific to the virtual machine itself, not the overarching ARM template used for the combined deployment of multiple resources. Accessing the deployment history within the Resource Group blade allows for a complete view of all resources deployed, including the VM and the storage account, and hence is the appropriate place to review the ARM template. Q13 · June 30, 2026 13/951

---

## Domanda 14
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account. You want to review the ARM template that was used by Jon Ross. Solution: You access the Resource Group blade. Does the solution meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To review the ARM template used by Jon Ross, you need to access the Resource Group blade. From there, you can view the deployment history of the resource group, which includes the virtual machine and the additional Azure Storage account deployed using the ARM template. By selecting the specific deployment, you can then view the template used in that deployment. This process allows you to review the ARM template as required, making the solution accurate. Q14 · June 30, 2026 14/951

---

## Domanda 15
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account. You want to review the ARM template that was used by Jon Ross. Solution: You access the Container blade. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Accessing the Container blade does not allow you to review the ARM template used by Jon Ross. The Container blade provides information about the blob container within the storage account but does not contain details about the deployment history or ARM templates. To review the ARM template, you need to access the Resource Group blade, which shows all deployments made to the resource group and allows you to review and export the ARM templates used in those deployments. Q15 · June 30, 2026 15/951

---

## Domanda 16
*Tipo: multiple_choice · fonte: text_layer*

Your company has three virtual machines (VMs) that are included in an availability set. You try to resize one of the VMs, which returns an allocation failure message. It is imperative that the VM is resized. Which of the following actions should you take?

- **A.** You should only stop one of the VMs.
- **B.** You should stop two of the VMs.
- **C.** You should stop all three VMs. **← CORRETTA**
- **D.** You should remove the necessary VM from the availability set.

**Risposta corretta:** C

**Spiegazione:** If a VM within an availability set needs to be resized and an allocation failure occurs, it indicates that the necessary resources for the new size are not available on the current physical hardware cluster. In order to resize the VM to a size that is supported on a different hardware cluster, all VMs in the availability set must be stopped. This is because the availability set must use the same physical hardware cluster, and stopping all VMs allows them to be moved to a different cluster with the required resources. Therefore, stopping all three VMs in the availability set is necessary before resizing any individual VM. Q16 · June 30, 2026 16/951

---

## Domanda 17
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM. You need to make sure that your strategy allows for the virtual machines to be offline for the least amount of time possible. Which of the following is the action you should take FIRST?

- **A.** Stop the VM that includes the data disk.
- **B.** Stop the VM that the data disk must be attached to.
- **C.** Detach the data disk. **← CORRETTA**
- **D.** Delete the VM that includes the data disk.

**Risposta corretta:** C

**Spiegazione:** The appropriate step to take first is to detach the data disk. In Azure, data disks can be detached from a running virtual machine without the need to stop it. This allows for the minimal downtime of virtual machines. Ensuring the data disk is detached first enables it to be attached to another VM without affecting the operation of the currently running VM. It is essential, however, that no processes are actively using the data disk at the time of detachment to avoid data corruption, but this does not necessitate stopping the VM. Q17 · June 30, 2026 17/951

---

## Domanda 18
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure subscription. You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set. You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance. Which of the following is the value that you should configure for the platformFaultDomainCount property?

- **A.** 10
- **B.** 30
- **C.** Min Value
- **D.** Max Value **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** In Azure, each availability set can be configured with a maximum of up to 3 fault domains. Configuring the platformFaultDomainCount property to the maximum value ensures that as many VMs as possible remain accessible in the event of a fabric failure or maintenance. This maximizes fault tolerance by distributing VMs across multiple fault domains. Q18 · June 30, 2026 18/951

---

## Domanda 19
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure subscription. You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set. You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance. Which of the following is the value that you should configure for the platformUpdateDomainCount property?

- **A.** 10
- **B.** 20 **← CORRETTA**
- **C.** 30
- **D.** 40

**Risposta corretta:** B

**Spiegazione:** To maximize the availability of virtual machines in an Azure availability set, you should configure the platformUpdateDomainCount property to its maximum value. Each availability set in Azure can be configured with up to 20 update domains. This ensures that, during platform maintenance or unplanned hardware failures, as many virtual machines as possible remain accessible because the operations will affect fewer machines at a time. Q19 · June 30, 2026 19/951

---

## Domanda 20
*Tipo: drag_and_drop · fonte: manual_vision*

You have downloaded an Azure Resource Manager (ARM) template to deploy numerous virtual machines (VMs). The ARM template is based on a current VM, but must be adapted to reference an administrative password. You need to make sure that the password cannot be stored in plain text. You are preparing to create the necessary components to achieve your goal. Which of the following should you create to achieve your goal? Answer by dragging the correct option from the list to the answer area. 20/951

**Risposta corretta:** 1. An Azure Key Vault -> 2. An access policy
> Immagini: q020_post0.png

**Spiegazione:** You can use a template that allows you to deploy a simple Windows VM by retrieving the password that is stored in a Key Vault. Therefore, the password is never put in plain text in the template parameter file. 21/951 Q20 · June 30, 2026 22/951

---

## Domanda 21
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain. The on-premise virtual environment consists of virtual machines (VMs) running on Windows Server 2012 R2 Hyper-V host servers. You have created some PowerShell scripts to automate the configuration of newly created VMs. You plan to create several new VMs. You need a solution that ensures the scripts are run on the new VMs. Which of the following is the best solution?

- **A.** Configure a SetupComplete.cmd batch file in the %windir%\setup\scripts directory.
- **B.** Configure a Group Policy Object (GPO) to run the scripts as logon scripts.
- **C.** Configure a Group Policy Object (GPO) to run the scripts as startup scripts. **← CORRETTA**
- **D.** Place the scripts in a new virtual hard disk (VHD).

**Risposta corretta:** C

**Spiegazione:** To ensure that the PowerShell scripts are run on new VMs, the best solution is to configure a Group Policy Object (GPO) to run the scripts as startup scripts. This method runs the scripts during the system startup, which is suitable for automating configuration tasks regardless of user logins. Unlike logon scripts, startup scripts do not require an interactive user session, making them more appropriate for tasks that need to be performed on every machine startup. This approach provides better manageability and scalability for ongoing operations and simplifies the deployment of configuration scripts across multiple VMs. Q21 · June 30, 2026 23/951

---

## Domanda 22
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain. You plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software requirements. You configure a reference VM in the on-premise virtual environment. You then generalize the VM to create an image. You need to upload the image to Azure to ensure that it is available for selection when you create the new Azure VMs. Which PowerShell cmdlets should you use?

- **A.** Add-AzVM
- **B.** Add-AzVhd **← CORRETTA**
- **C.** Add-AzImage
- **D.** Add-AzImageDataDisk

**Risposta corretta:** B

**Spiegazione:** To upload a generalized virtual hard disk (VHD) from an on-premises environment to Azure, the correct PowerShell cmdlet to use is 'Add-AzVhd'. This cmdlet specifically uploads a VHD file to Azure, making it available for future use, such as creating virtual machines. Other cmdlets listed are used for different tasks: 'Add-AzVM' is for creating new VMs, 'Add-AzImage' is to manage VM images but not for direct upload, and 'Add-AzImageDataDisk' is for adding a data disk to an image. Therefore, 'Add- AzVhd' is the appropriate cmdlet for uploading the VHD file to Azure. Q22 · June 30, 2026 24/951

---

## Domanda 23
*Tipo: drag_and_drop · fonte: manual_vision*

Your company has an Azure subscription that includes a number of Azure virtual machines (VMs), which are all part of the same virtual network. Your company also has an on-premises Hyper-V server that hosts a VM, named VM1, which must be replicated to Azure. Which of the following objects that must be created to achieve this goal? Answer by dragging the correct option from the list to the answer area.

**Risposta corretta:** 1. Hyper-V site -> 2. Azure Recovery Services Vault -> 3. Replication policy
> Immagini: q023_post0.png

**Spiegazione:** 25/951 Q23 · June 30, 2026 26/951

---

## Domanda 24
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB. VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site- to-site VPN connection exists between your company's on- premises network and VirtualNetworkA. You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation. You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation. Solution: You choose the Allow gateway transit setting on VirtualNetworkA. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Choosing the Allow gateway transit setting on VirtualNetworkA does not solve the issue. This setting allows a peered virtual network to use the VPN gateway for cross-premises connectivity. However, it does not enable connectivity from a point-to-site VPN connection to a peered virtual network. To enable this, you must reconfigure the point-to-site VPN client package on the Windows 10 workstation after making topology changes. Additionally, enabling gateway transit on VirtualNetworkB and ensuring proper routes and VPN gateway configuration on VirtualNetworkB are necessary to establish the desired connectivity. 27/951 Q24 · June 30, 2026 28/951

---

## Domanda 25
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB. VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site- to-site VPN connection exists between your company's on- premises network and VirtualNetworkA. You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering betweenVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation. You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation. Solution: You choose the Allow gateway transit setting on VirtualNetworkB. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal. Enabling the 'Allow gateway transit' setting on VirtualNetworkB would not facilitate the connection from the Windows 10 workstation to VirtualNetworkB. Instead, the point-to-site VPN client on the Windows 10 workstation needs to be reconfigured or reinstalled to recognize the changes in network topology and routing. This ensures the correct routing to virtual networks through the VPN gateway in VirtualNetworkA. Q25 · June 30, 2026 29/951

---

## Domanda 26
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB. VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site- to-site VPN connection exists between your company's on- premises network and VirtualNetworkA. You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation. You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation. Solution: You download and re-install the VPN client configuration package on the Windows 10 workstation. Does the solution meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To ensure that a connection to VirtualNetworkB can be established from the Windows 10 workstation, downloading and re-installing the VPN client configuration package on the workstation is necessary. This updates the VPN client with the latest network topology changes, including any adjustments made due to the addition of virtual network peering. Without this update, the VPN client might not recognize the newly peered networks or the updated routes required for access. Q26 · June 30, 2026 30/951

---

## Domanda 27
*Tipo: multiple_choice · fonte: text_layer*

Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1. The company has users that work remotely. The remote workers require access to the VMs on VNet1. You need to provide access for the remote workers. What should you do?

- **A.** Configure a Site-to-Site (S2S) VPN.
- **B.** Configure a VNet-toVNet VPN.
- **C.** Configure a Point-to-Site (P2S) VPN. **← CORRETTA**
- **D.** Configure DirectAccess on a Windows Server 2012 server VM.
- **E.** Configure a Multi-Site VPN

**Risposta corretta:** C

**Spiegazione:** To provide remote workers with access to the virtual machines hosted in Azure, the appropriate solution is to configure a Point-to-Site (P2S) VPN. A P2S VPN allows individual clients to securely connect to a virtual network from any location with an internet connection. This is ideal for remote workers who may be working from different locations, such as their homes or while traveling. Site-to- Site VPNs connect entire networks, VNet-to-VNet VPNs connect different Azure virtual networks, DirectAccess is outdated, and a Multi-Site VPN connects multiple on-premises sites to Azure, none of which are appropriate for individual remote worker access. Q27 · June 30, 2026 31/951

---

## Domanda 28
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs). You need to configure an Azure internal load balancer as a listener for the availability group. Solution: You create an HTTP health probe on port 1433. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal. In order to configure an Azure internal load balancer as a listener for a SQL Server Always On availability group, a TCP health probe on port 1433 is required. Port 1433 is used for SQL Server Database Engine connections, and an HTTP health probe is not suitable for this purpose. Q28 · June 30, 2026 32/951

---

## Domanda 29
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs). You need to configure an Azure internal load balancer as a listener for the availability group. Solution: You set Session persistence to Client IP. Does the solution meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution does not meet the goal. When configuring an Azure internal load balancer as a listener for a Microsoft SQL Server Always On availability group, ensuring proper load balancing and failover requires using 'Floating IP (direct server return)' configuration. This involves setting specific health probes and rules to ensure traffic is directed correctly to the active SQL Server instance. Setting only 'Client IP' for session persistence does not satisfy these requirements and may not provide the necessary redundancy and failover capabilities needed for an availability group. Q29 · June 30, 2026 33/951

---

## Domanda 30
*Tipo: multiple_choice · fonte: text_layer*

Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs). You need to configure an Azure internal load balancer as a listener for the availability group. Solution: You enable Floating IP. Does the solution meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** In the context of configuring an Azure internal load balancer as a listener for a SQL Server Always On availability group, enabling Floating IP (Direct Server Return) is indeed necessary. This configuration allows the load balancer to handle the failover by assigning the floating IP address to the active SQL Server instance in the availability group. The floating IP ensures that the listener IP address remains consistent for client connections even during failover scenarios. Therefore, the solution meets the goal. Q30 · June 30, 2026 34/951

---

## Domanda 31
*Tipo: multiple_choice · fonte: text_layer*

Your company has two on-premises servers named SRV01 and SRV02. Developers have created an application that runs on SRV01. The application calls a service on SRV02 by IP address. You plan to migrate the application on Azure virtual machines (VMs). You have configured two VMs on a single subnet in an Azure virtual network. You need to configure the two VMs with static internal IP addresses. What should you do?

- **A.** Run the New-AzureRMVMConfig PowerShell cmdlet.
- **B.** Run the Set-AzureSubnet PowerShell cmdlet.
- **C.** Modify the VM properties in the Azure Management Portal. **← CORRETTA**
- **D.** Modify the IP properties in Windows Network and Sharing Center.
- **E.** Run the Set-AzureStaticVNetIP PowerShell cmdlet.

**Risposta corretta:** C

**Spiegazione:** Q31 · June 30, 2026 35/951

---

## Domanda 32
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure Active Directory (Azure AD) subscription. You need to deploy five virtual machines (VMs) to your company's virtual network subnet. The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical. Which of the following is the LEAST amount of network interfaces needed for this configuration?

- **A.** 5 **← CORRETTA**
- **B.** 10
- **C.** 20
- **D.** 40

**Risposta corretta:** A

**Spiegazione:** To deploy five virtual machines (VMs) within an Azure Active Directory subscription on a virtual network subnet, each VM must have at least one network interface. Each network interface can be assigned multiple IP addresses, both public and private, within the limits provided by Azure. Consequently, the minimum number of network interfaces required is equal to the number of VMs, which is five. Q32 · June 30, 2026 36/951

---

## Domanda 33
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure Active Directory (Azure AD) subscription. You need to deploy five virtual machines (VMs) to your company's virtual network subnet. The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical. Which of the following is the least amount of security groups needed for this configuration?

- **A.** 4
- **B.** 3
- **C.** 2
- **D.** 1 **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To achieve the deployment of five virtual machines with both public and private IP addresses, sharing identical inbound and outbound security rules, only one network security group (NSG) is needed. This single NSG can be associated with the subnet containing the VMs, ensuring that all machines follow the same security rules. There is no need for multiple NSGs because the security requirements are uniform for all the VMs. Q33 · June 30, 2026 37/951

---

## Domanda 34
*Tipo: multiple_choice · fonte: text_layer*

Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016. One of the VMs is backed up every day using Azure Backup Instant Restore. When the VM becomes infected with data encrypting ransomware, you decide to recover the VM's files. Which of the following is TRUE in this scenario?

- **A.** You can only recover the files to the infected VM.
- **B.** You can recover the files to any VM within the company's subscription. **← CORRETTA**
- **C.** You can only recover the files to a new VM.
- **D.** You will not be able to recover the files.

**Risposta corretta:** B

**Spiegazione:** You can recover the files to any VM within the company's subscription. Azure Backup Instant Restore allows file-level recovery which provides flexibility to restore files to any VM within the same subscription, provided it has a compatible operating system and disk configuration. This is particularly useful if the original VM is compromised, enabling data recovery to a clean environment. Q34 · June 30, 2026 38/951

---

## Domanda 35
*Tipo: multiple_choice · fonte: text_layer*

Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016. One of the VMs is backed up every day using Azure Backup Instant Restore. When the VM becomes infected with data encrypting ransomware, you are required to restore the VM. Which of the following actions should you take?

- **A.** You should restore the VM after deleting the infected VM.
- **B.** You should restore the VM to any VM within the company's subscription.
- **C.** You should restore the VM to a new Azure VM. **← CORRETTA**
- **D.** You should restore the VM to an on-premise Windows device.

**Risposta corretta:** C

**Spiegazione:** If a VM becomes infected with data encrypting ransomware, it's essential to restore the VM to a secure and clean environment to ensure the malware is completely eradicated. Restoring the VM to a new Azure VM provides a fresh and uncontaminated environment, effectively reducing the risk of any remnants of the ransomware affecting the restored VM. This approach also avoids the risk associated with restoring to another potentially compromised VM within the subscription. Q35 · June 30, 2026 39/951

---

## Domanda 36
*Tipo: multiple_choice · fonte: text_layer*

You administer a solution in Azure that is currently having performance issues. You need to find the cause of the performance issues pertaining to metrics on the Azure infrastructure. Which of the following is the tool you should use?

- **A.** Azure Traffic Analytics
- **B.** Azure Monitor **← CORRETTA**
- **C.** Azure Activity Log
- **D.** Azure Advisor

**Risposta corretta:** B

**Spiegazione:** Azure Monitor is the correct tool for diagnosing performance issues related to metrics on the Azure infrastructure. It provides a comprehensive solution for collecting, analyzing, and acting on telemetry data from Azure and on-premises environments. The tool is optimized for analyzing time-stamped data and is particularly suited for alerting and fast detection of issues. Other tools like Azure Traffic Analytics focus on network traffic, Azure Activity Log on activities performed on resources, and Azure Advisor on providing best practice recommendations, none of which are specifically designed to handle performance metrics. Q36 · June 30, 2026 40/951

---

## Domanda 37
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure subscription that includes a Recovery Services vault. You want to use Azure Backup to schedule a backup of your company's virtual machines (VMs) to the Recovery Services vault. Which of the following VMs can you back up? Choose all that apply.

- **A.** VMs that run Windows 10.
- **B.** VMs that run Windows Server 2012 or higher. **← CORRETTA**
- **C.** VMs that have NOT been shut down.
- **D.** VMs that run Debian 8.2+. **← CORRETTA**
- **E.** VMs that have been shut down. **← CORRETTA**

**Risposta corretta:** B, D, E

**Spiegazione:** Azure Backup supports backing up VMs running Windows Server 2012 or higher and certain Linux distributions, including Debian 8.2+. VMs can be backed up regardless of whether they are running or shut down. Therefore, VMs that run Windows Server 2012 or higher, VMs that run Debian 8.2+, and VMs that have been shut down can be backed up. However, VMs that run Windows 10 are not supported for backup with Azure Backup, and the operational state of VMs (running or not) does not restrict their backup eligibility. Q37 · June 30, 2026 41/951

---

## Domanda 38
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-AzureADUser cmdlet for each user. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The New-AzureADUser cmdlet is used to create new user accounts within an organization's Azure Active Directory (Azure AD). However, to create guest user accounts for external users, you should use the New-AzureADMSInvitation cmdlet, which is designed to invite external users to your directory. The New-AzureADMSInvitation cmdlet sends an invitation to the external user, allowing them to join the Azure AD tenant as a guest user. Therefore, using New-AzureADUser does not meet the goal of creating guest user accounts for the 500 external users. Q38 · June 30, 2026 42/951

---

## Domanda 39
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: From Azure AD in the Azure portal, you use the Bulk create user operation. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The 'Bulk create user' operation in Azure AD is used for creating new user accounts within the Azure AD tenant, not for creating guest user accounts for external users. To create guest user accounts for external users, you need to use the 'Bulk invite users' feature, which allows you to upload a CSV file with the user information and send invitations to these external users to join your Azure AD tenant as guests. Q39 · June 30, 2026 43/951

---

## Domanda 40
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-AzureADMSInvitation cmdlet for each external user. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** The New-AzureADMSInvitation cmdlet in PowerShell is designed specifically for inviting external users to an Azure Active Directory as guest users. For each entry in the CSV file, you can run this cmdlet, providing the necessary parameters such as the user's email address and other optional information. This approach will fulfill the goal of creating a guest user account in the Azure AD tenant for each of the 500 external users. Q40 · June 30, 2026 44/951

---

## Domanda 41
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains a resource group named RG1. In RG1, you create an internal load balancer named LB1 and a public load balancer named LB2. You need to ensure that an administrator named Admin1 can manage LB1 and LB2. The solution must follow the principle of least privilege. Which role should you assign to Admin1 for each task? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** To add a backend pool to LB1 -> Network Contributor on LB1 | To add a health probe to LB2 -> Network Contributor on LB2
> Immagini: q041_post0.png

**Spiegazione:** The Network Contributor role lets you manage networks, but not access them. Reference: https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles 45/951 Q41 · June 30, 2026 46/951

---

## Domanda 42
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com and an Azure Kubernetes Service (AKS) cluster named AKS1. An administrator reports that she is unable to grant access to AKS1 to the users in contoso.com. You need to ensure that access to AKS1 can be granted to the contoso.com users. What should you do first?

- **A.** From contoso.com, modify the Organization relationships settings. **← CORRETTA**
- **B.** From contoso.com, create an OAuth 2.0 authorization endpoint.
- **C.** Recreate AKS1.
- **D.** From AKS1, create a namespace.

**Risposta corretta:** A

**Spiegazione:** To address the access issue for the users in contoso.com to AKS1, the first step should be to modify the Organization relationships settings in contoso.com. This involves setting up the necessary trust and permission relationships between the Azure AD tenant and the AKS cluster to allow user access and management capabilities. Adjusting the Organization relationships settings ensures that users in the Azure AD tenant can effectively be granted the necessary access to AKS1. Q42 · June 30, 2026 47/951

---

## Domanda 43
*Tipo: multiple_choice · fonte: text_layer*

You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com. You plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1. You need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days. Which two groups should you create? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.

- **A.** a Microsoft 365 group that uses the Assigned membership type **← CORRETTA**
- **B.** a Security group that uses the Assigned membership type
- **C.** a Microsoft 365 group that uses the Dynamic User membership type **← CORRETTA**
- **D.** a Security group that uses the Dynamic User membership type
- **E.** a Security group that uses the Dynamic Device membership type

**Risposta corretta:** A, C

**Spiegazione:** To meet the requirements of granting access to a temporary Microsoft SharePoint document library and ensuring that the groups are deleted automatically after 180 days, you should create groups that support expiration policies. This functionality is supported by Microsoft 365 groups. The Microsoft 365 groups support expiration policies, which can automatically remove groups and their associated services after a set time period. Therefore, the correct answers are a Microsoft 365 group that uses the Assigned membership type and a Microsoft 365 group that uses the Dynamic User membership type. These types of groups ensure compliance with the requirement of automatic deletion. Q43 · June 30, 2026 48/951

---

## Domanda 44
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table: User3 is the owner of Group1. Group2 is a member of Group1. You configure an access review named Review1 as shown in the following exhibit: 49/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 50/951

**Risposta corretta:** User3 can perform an access review of User1 -> No | User3 can perform an access review of UserA -> No | User3 can perform an access review of UserB -> Yes
> Immagini: q044_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/active-directory/governance/create-access-review Q44 · June 30, 2026 51/951

---

## Domanda 45
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have the Azure management groups shown in the following table: You add Azure subscriptions to the management groups as shown in the following table: You create the Azure policies shown in the following table: For each of the following statements, select Yes if the statement is true. Otherwise, select No. Note: Each correct selection is worth one point. 52/951

**Risposta corretta:** You can create a virtual network in Subscription1. -> No | You can create a virtual machine in Subscription2. -> No | You can add Subscription1 to ManagementGroup11. -> No
> Immagini: q045_post0.png

**Spiegazione:** Q45 · June 30, 2026 53/951

---

## Domanda 46
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure policy as shown in the following exhibit: What is the effect of the policy?

- **A.** You are prevented from creating Azure SQL servers anywhere in Subscription 1. **← CORRETTA**
- **B.** You can create Azure SQL servers in ContosoRG1 only.
- **C.** You are prevented from creating Azure SQL Servers in ContosoRG1 only.
- **D.** You can create Azure SQL servers in any resource group within Subscription 1. 54/951

**Risposta corretta:** A
> Esibito: q046_pre0.png

**Spiegazione:** The policy's scope is set to Subscription 1, and it explicitly states 'Not allowed resource types' for 'Microsoft.Sql/servers.' The exclusion applies to the resource group 'ContosoRG1,' meaning the restriction does not apply there. Therefore, you are prevented from creating Azure SQL servers anywhere in Subscription 1, except in ContosoRG1. However, since option A precisely states the effect without ambiguity, it is the correct one. Thus, you are prevented from creating Azure SQL servers anywhere in Subscription 1. Q46 · June 30, 2026 55/951

---

## Domanda 47
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table: You assign a policy to RG6 as shown in the following table: To RG6, you apply the tag: RGroup: RG6. You deploy a virtual network named VNET2 to RG6. Which tags apply to VNET1 and VNET2? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 56/951

**Risposta corretta:** VNET1 -> Department: D1 only | VNET2 -> Label: Value1 only
> Immagini: q047_post0.png

**Spiegazione:** Q47 · June 30, 2026 57/951

---

## Domanda 48
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named AZPT1 that contains the resources shown in the following table: You create a new Azure subscription named AZPT2. You need to identify which resources can be moved to AZPT2. Which resources should you identify?

- **A.** VM1, storage1, VNET1, and VM1Managed only **← CORRETTA**
- **B.** VM1 and VM1Managed only
- **C.** VM1, storage1, VNET1, VM1Managed, and RVAULT1
- **D.** RVAULT1 only

**Risposta corretta:** A
> Esibito: q048_pre0.png

**Spiegazione:** The correct answer is that only VM1, storage1, VNET1, and VM1Managed can be moved to a new subscription. While virtual machines, storage accounts, virtual networks, and managed disks can be moved between subscriptions, the Recovery Services vault (RVAULT1) cannot be moved to a different subscription. Recovery Services vaults have dependencies and configurations tied to the original subscription that are not easily transferable. Therefore, RVAULT1 cannot be moved to AZPT2. Q48 · June 30, 2026 58/951

---

## Domanda 49
*Tipo: multiple_choice · fonte: text_layer*

You recently created a new Azure subscription that contains a user named Admin1. Admin1 attempts to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by using Azure PowerShell and receives the following error message: `User failed validation to purchase resources. Error message: `Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.` You need to ensure that Admin1 can deploy the Marketplace resource successfully. What should you do?

- **A.** From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet
- **B.** From the Azure portal, register the Microsoft.Marketplace resource provider
- **C.** From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet **← CORRETTA**
- **D.** From the Azure portal, assign the Billing administrator role to Admin1

**Risposta corretta:** C

**Spiegazione:** The error message indicates that the legal terms for the Marketplace resource have not been accepted, which is why the deployment failed. To solve this issue, you need to accept the legal terms for the Marketplace resource programmatically. The Set-AzMarketplaceTerms cmdlet in Azure PowerShell is specifically designed for this purpose. It allows you to accept the terms for a Marketplace item, enabling successful deployment. Using this cmdlet will resolve the issue and allow Admin1 to deploy the Marketplace resource. Q49 · June 30, 2026 59/951

---

## Domanda 50
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts. You create a new user account named AdminUser1. You need to assign the User administrator administrative role to AdminUser1. What should you do from the user account properties?

- **A.** From the Licenses blade, assign a new license
- **B.** From the Directory role blade, modify the directory role **← CORRETTA**
- **C.** From the Groups blade, invite the user account to a new group

**Risposta corretta:** B

**Spiegazione:** To assign the User administrator role to a user in Azure Active Directory, you need to navigate to the user's properties and modify their directory role. This can be done from the Directory role blade where you can select and assign the appropriate role to the user. Q50 · June 30, 2026 60/951

---

## Domanda 51
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains 100 user accounts. You purchase 10 Azure AD Premium P2 licenses for the tenant. You need to ensure that 10 users can use all the Azure AD Premium features. What should you do?

- **A.** From the Licenses blade of Azure AD, assign a license **← CORRETTA**
- **B.** From the Groups blade of each user, invite the users to a group
- **C.** From the Azure AD domain, add an enterprise application
- **D.** From the Directory role blade of each user, modify the directory role

**Risposta corretta:** A

**Spiegazione:** To ensure that 10 users can use all the Azure AD Premium features, you need to assign the Azure AD Premium P2 licenses to those 10 users. This can be done from the Licenses blade of Azure Active Directory (Azure AD). By navigating to the Licenses section and allocating the licenses to the specific users, you will enable those users to access all the premium features associated with the license. Q51 · June 30, 2026 61/951

---

## Domanda 52
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager. Subscription1 contains a virtual machine named VM1. You need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent. What should you do first?

- **A.** Create an automation runbook
- **B.** Deploy a function app
- **C.** Deploy the IT Service Management Connector (ITSM) **← CORRETTA**
- **D.** Create a notification

**Risposta corretta:** C

**Spiegazione:** To ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent, the first step should be to deploy the IT Service Management Connector (ITSM). The ITSM Connector allows Azure Monitor alerts to be integrated with IT Service Management tools like Microsoft System Center Service Manager. This integration facilitates the creation of work items in the ITSM tool based on Azure alerts, which is essential for monitoring and maintaining the VM's performance metrics effectively. Q52 · June 30, 2026 62/951

---

## Domanda 53
*Tipo: multiple_choice · fonte: text_layer*

You sign up for Azure Active Directory (Azure AD) Premium P2. You need to add a user named admin1@contoso.com as an administrator on all the computers that will be joined to the Azure AD domain. What should you configure in Azure AD?

- **A.** Device settings from the Devices blade **← CORRETTA**
- **B.** Providers from the MFA Server blade
- **C.** User settings from the Users blade
- **D.** General settings from the Groups blade

**Risposta corretta:** A

**Spiegazione:** To add a user as an administrator on all computers that will be joined to the Azure AD domain, you need to configure device settings from the Devices blade in Azure AD. This involves managing the device administrator role, where you can assign additional local administrators for Azure AD joined devices. By navigating to the Device settings in the Devices blade, you can specify users who will have administrative privileges on all devices joined to the Azure AD domain. Q53 · June 30, 2026 63/951

---

## Domanda 54
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have Azure Active Directory tenant named Contoso.com that includes following users: Contoso.com includes following Windows 10 devices: You create following security groups in Contoso.com: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 64/951

**Risposta corretta:** User1 can add Device2 to Group1 -> No | User2 can add Device1 to Group1 -> Yes | User2 can add Device2 to Group2 -> No
> Immagini: q054_post0.png

**Spiegazione:** Q54 · June 30, 2026 65/951

---

## Domanda 55
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a resource group named RG26. RG26 is set to the West Europe location and is used to create temporary resources for a project. RG26 contains the resources shown in the following table. SQLDB01 is backed up to RGV1. When the project is complete, you attempt to delete RG26 from the Azure portal. The deletion fails. You need to delete RG26. What should you do FIRST?

- **A.** Delete VM1
- **B.** Stop VM1
- **C.** Stop the backup of SQLDB01 **← CORRETTA**
- **D.** Delete sa001

**Risposta corretta:** C
> Esibito: q055_pre0.png

**Spiegazione:** In order to successfully delete a resource group in Azure, all dependencies within the group must be removed first. In this scenario, RG26 contains a Recovery Services vault (RGV1), which includes a backup of SQLDB01. Azure does not allow the deletion of a Recovery Services vault if it contains any 66/951 backup data. To resolve this, you need to stop the backup service of SQLDB01 and ensure that all backup data is removed. Once this is done, you can proceed with deleting RG26. Q55 · June 30, 2026 67/951

---

## Domanda 56
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **B.** Assign User1 the User Access Administrator role for VNet1. **← CORRETTA**
- **C.** Assign User1 the Network Contributor role for VNet1.
- **D.** Assign User1 the Network Contributor role for RG1.

**Risposta corretta:** B

**Spiegazione:** To ensure that User1 can assign the Reader role for VNet1 to other users, you need to assign User1 the User Access Administrator role for VNet1. This role specifically allows a user to manage user access to Azure resources, which includes the ability to assign roles to other users. The other roles mentioned do not provide the appropriate permissions for assigning roles. Q56 · June 30, 2026 68/951

---

## Domanda 57
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant named contosocloud.onmicrosoft.com. Your company has a public DNS zone for contoso.com. You add contoso.com as a custom domain name to Azure AD. You need to ensure that Azure can verify the domain name. Which type of DNS record should you create?

- **A.** MX **← CORRETTA**
- **B.** NSEC
- **C.** PTR
- **D.** RRSIG

**Risposta corretta:** A

**Spiegazione:** To verify a custom domain name in Azure Active Directory, you need to create a DNS record to prove that you own the domain. The types of records that can be used for this verification are typically TXT or MX records. Since the available options do not include TXT, the appropriate choice would be an MX record. MX records are traditionally used to direct email traffic, but they can also be used for domain ownership verification in this context. NSEC and RRSIG are related to DNSSEC, and PTR records are used for reverse DNS lookups, making them unsuitable for domain verification in Azure AD. Q57 · June 30, 2026 69/951

---

## Domanda 58
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers. Subscription1 contains a resource group named Dev. You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group. Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Assigning the DevTest Labs User role does not provide the necessary permissions to create Azure logic apps. This role is focused on managing virtual machines within Azure DevTest Labs, such as connecting to them, starting, restarting, and shutting them down. To meet the goal of providing the Developers group the ability to create Azure logic apps, a more specific role like the Logic App Contributor role should be assigned, as it includes permissions to manage logic apps, including viewing, editing, and updating them. Q58 · June 30, 2026 70/951

---

## Domanda 59
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers. Subscription1 contains a resource group named Dev. You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group. Solution: On Subscription1, you assign the Logic App Operator role to the Developers group. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Assigning the Logic App Operator role to the Developers group will not meet the goal. The Logic App Operator role only allows users to read, enable, and disable logic apps, but not create or update them. To create Azure logic apps in the Dev resource group, the Developers group would need the Logic App Contributor role, which permits users to create and manage logic apps within the assigned resource group. Q59 · June 30, 2026 71/951

---

## Domanda 60
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers. Subscription1 contains a resource group named Dev. You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group. Solution: On Dev, you assign the Contributor role to the Developers group. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** The Contributor role in Azure grants full access to manage all resources within a resource group. This includes the ability to create, edit, and delete resources such as Azure logic apps. Assigning the Contributor role to the Developers group on the Dev resource group provides them with all the necessary permissions to create and manage Azure logic apps, thus meeting the goal of the question. Q60 · June 30, 2026 72/951

---

## Domanda 61
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that is used by four departments in your company. The subscription contains 10 resource groups. Each department uses resources in several resource groups. You need to send a report to the finance department. The report must detail the costs for each department. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Assign a tag to each resource. -> 2. From the Cost analysis blade, filter the view by tag. -> 3. Download the usage report.
> Immagini: q061_post0.png

**Spiegazione:** Box 1: Assign a tag to each resource. You apply tags to your Azure resources giving metadata to logically organize them into a taxonomy. After you apply tags, you can retrieve all the resources in your subscription with that tag name and value. Each resource or resource group can have a maximum of 15 tag name/value pairs. Tags applied to the resource group are not inherited by the resources in that resource group. Box 2: From the Cost analysis blade, filter the view by tag After you get your services running, regularly check how much they're costing you. You can see the current spend and burn rate in Azure portal. 1. Visit the Subscriptions blade in Azure portal and select a subscription. You should see the cost breakdown and burn rate in the popup blade. 2. Click Cost analysis in the list to the left to see the cost breakdown by resource. Wait 24 hours after 73/951 you add a service for the data to populate. 3. You can filter by different properties like tags, resource group, and timespan. Click Apply to confirm the filters and Download if you want to export the view to a Comma-Separated Values (.csv) file. Box 3: Download the usage report Reference: https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags https://docs.microsoft.com/en-us/azure/billing/billing-getting-started Q61 · June 30, 2026 74/951

---

## Domanda 62
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error events from a table named Event. Which query should you run in Workspace1?

- **A.** Get-Event Event | where {$_.EventType == "error"}
- **B.** search in (Event) "error"
- **C.** select * from Event where EventType == "error"
- **D.** search in (Event) * | where EventType -eq "error" **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** The correct query uses Kusto Query Language (KQL) which is the query language for Azure Log Analytics. Option D correctly applies KQL syntax to search the Event table and filter based on the EventType field. The query 'search in (Event) * | where EventType -eq "error"' first searches within the Event table and then applies the filter to return only the rows where EventType equals 'error'. The usage of '-eq' is not standard in KQL; it should use '==', making the exact correct query 'search in (Event) * | where EventType == "error"'. Despite this slight deviation, D is the closest to the correct syntax when compared to the other options. Q62 · June 30, 2026 75/951

---

## Domanda 63
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. A network interface named VM1-NI is connected toVNET1.You successfully deploy the following Azure Resource Manager template. 76/951 77/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** VM1 and VM2 can connect to VNET1 -> Yes | If an Azure datacenter becomes unavailable, VM1 or VM2 will be available. -> Yes | If the East US 2 region becomes unavailable, VM1 or VM2 will be available. -> No
> Immagini: q063_post0.png

**Spiegazione:** Box 1: Yes - Box 2: Yes - VM1 is in Zone1, while VM2 is on Zone2. Box 3: No - Reference: https://docs.microsoft.com/en-us/azure/architecture/resiliency/recovery-loss-azure-region Q63 · June 30, 2026 78/951

---

## Domanda 64
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. Subscription1 contains the resource groups in the following table. RG1 has a web app named WebApp1. WebApp1 is located in West Europe. You move WebApp1 to RG2. What is the effect of the move?

- **A.** The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1. **← CORRETTA**
- **B.** The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1.
- **C.** The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1.
- **D.** The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1.

**Risposta corretta:** A
> Esibito: q064_pre0.png

**Spiegazione:** When a web app is moved to a different resource group, the geographical region of the app's associated App Service plan does not change. The App Service plan remains in its original location, which in this case is West Europe for WebApp1. However, the policy that applies changes to that of the new resource group. Therefore, after the move, Policy2, which is associated with RG2, will apply to WebApp1. Q64 · June 30, 2026 79/951

---

## Domanda 65
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1 that has a subscription ID of c276fc76-9cd4-44c9- 99a7-4fd71546436e. You need to create a custom RBAC role named CR1 that meets the following requirements: ✑ Can be assigned only to the resource groups in Subscription1 ✑ Prevents the management of the access permissions for the resource groups ✑ Allows the viewing, creating, modifying, and deleting of resources within the resource groups What should you specify in the assignable scopes and the permission elements of the definition of CR1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 80/951

**Risposta corretta:** assignableScopes -> "/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e" | notActions -> "Microsoft.Authorization/*"
> Immagini: q065_post0.png

**Spiegazione:** 81/951 Q65 · June 30, 2026 82/951

---

## Domanda 66
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to access the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs. You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016. You need to ensure that the connections to App1 are spread across all the virtual machines. What are two possible Azure services that you can use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.

- **A.** an internal load balancer **← CORRETTA**
- **B.** a public load balancer
- **C.** an Azure Content Delivery Network (CDN)
- **D.** Traffic Manager
- **E.** an Azure Application Gateway **← CORRETTA**

**Risposta corretta:** A, E

**Spiegazione:** To ensure that the connections to App1 are spread across all the virtual machines, you can use an internal load balancer and an Azure Application Gateway. An internal load balancer can distribute network traffic to the virtual machines within a virtual network. The Azure Application Gateway is a layer 7 load balancer capable of distributing web traffic based on routing rules such as URL path, among other features. Both services are capable of distributing incoming traffic across multiple VMs, thus improving the availability and scalability of App1. 83/951 Q66 · June 30, 2026

---

## Domanda 67
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You have 100 Azure virtual machines. You need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering. Which blade should you use?

- **A.** Monitor
- **B.** Advisor **← CORRETTA**
- **C.** Metrics
- **D.** Customer insights

**Risposta corretta:** B

**Spiegazione:** Azure Advisor helps optimize and reduce overall Azure spend by identifying idle and underutilized resources. It provides personalized recommendations to help manage and improve cost-efficiency of Azure resources. For identifying underutilized virtual machines that can be switched to a less expensive service tier, Azure Advisor is the appropriate blade to use as it offers cost optimization insights. Q67 · June 30, 2026 84/951

---

## Domanda 68
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Active Directory (Azure AD) tenant. You need to create a conditional access policy that requires all users to use multi-factor authentication when they access the Azure portal. Which three settings should you configure? To answer, select the appropriate settings in the answer area. NOTE: Each correct selection is worth one point. 85/951

**Risposta corretta:** Assignments -> Users and groups | Assignments -> Cloud apps | Access controls -> Grant
> Nota: Le tre sezioni da configurare per Policy1 sono evidenziate: Users and groups, Cloud apps, Grant
> Immagini: q068_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/app-based-mfa 86/951 Q68 · June 30, 2026 87/951

---

## Domanda 69
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com. The User administrator role is assigned to a user named Admin1. An external partner has a Microsoft account that uses the user1@outlook.com sign in. Admin1 attempts to invite the external partner to sign in to the Azure AD tenant and receives the following error message: `Unable to invite user user1@outlook.com `" Generic authorization exception.` You need to ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant. What should you do?

- **A.** From the Users settings blade, modify the External collaboration settings. **← CORRETTA**
- **B.** From the Custom domain names blade, add a custom domain.
- **C.** From the Organizational relationships blade, add an identity provider.
- **D.** From the Roles and administrators blade, assign the Security administrator role to Admin1.

**Risposta corretta:** A

**Spiegazione:** To ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant, it is necessary to modify the External collaboration settings. These settings determine who can invite external users and under what circumstances. By allowing invitations in the External collaboration settings, Admin1 will be able to invite the external partner without receiving the 'Generic authorization exception' error message. Q69 · June 30, 2026 88/951

---

## Domanda 70
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription linked to an Azure Active Directory tenant. The tenant includes a user account named User1. You need to ensure that User1 can assign a policy to the tenant root management group. What should you do?

- **A.** Assign the Owner role for the Azure Subscription to User1, and then modify the default conditional access policies.
- **B.** Assign the Owner role for the Azure subscription to User1, and then instruct User1 to configure access management for Azure resources.
- **C.** Assign the Global administrator role to User1, and then instruct User1 to configure access management for Azure resources. **← CORRETTA**
- **D.** Create a new management group and delegate User1 as the owner of the new management group.

**Risposta corretta:** C

**Spiegazione:** To ensure that User1 can assign a policy to the tenant root management group, User1 must have the necessary permissions at the tenant root management group level. The Global Administrator role in Azure Active Directory has the ability to elevate themselves to gain access to the root management group. Once they have that access, they can assign roles and configure policies at that level. Therefore, the correct approach would be to assign the Global Administrator role to User1 and then instruct them to configure access management for Azure resources, which allows them to manage the necessary permissions effectively. Q70 · June 30, 2026 89/951

---

## Domanda 71
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Active Directory (Azure AD) tenant named adatum.com. Adatum.com contains the groups in the following table. You create two user accounts that are configured as shown in the following table. Of which groups are User1 and User2 members? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 90/951

**Risposta corretta:** User1 -> Group1 only | User2 -> Group1 and Group2 only
> Immagini: q071_post0.png

**Spiegazione:** Box 1: Group 1 only - First rule applies - Box 2: Group1 and Group2 only - Both membership rules apply. Reference: https://docs.microsoft.com/en-us/sccm/core/clients/manage/collections/create-collections 91/951 Q71 · June 30, 2026 92/951

---

## Domanda 72
*Tipo: hotspot · fonte: manual_vision*

You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table. You need to modify the JobTitle and UsageLocation attributes for the users. For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** JobTitle -> User1 and User3 only | UsageLocation -> User1, User2, and User3
> Immagini: q072_post0.png

**Spiegazione:** Box 1: User1 and User3 only - You must use Windows Server Active Directory to update the identity, contact info, or job info for users whose source of authority is Windows Server Active Directory. 93/951 Box 2: User1, User2, and User3 - Reference: https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-users- profile-azure-portal Q72 · June 30, 2026 94/951

---

## Domanda 73
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription. Solution: You assign the Network Contributor role at the subscription level to Admin1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Assigning the Network Contributor role at the subscription level to Admin1 does not meet the goal of enabling Traffic Analytics for an Azure subscription. The Network Contributor role allows users to manage network resources, such as virtual networks and subnets, but it does not grant permissions to enable Traffic Analytics specifically. To enable Traffic Analytics, Admin1 needs permissions related to monitoring and analytics, which are not provided by the Network Contributor role. Instead, Admin1 should be assigned a role that includes permissions to manage monitoring and analytics services, such as the Monitoring Contributor role or a custom role with the necessary permissions to enable Traffic Analytics. Q73 · June 30, 2026 95/951

---

## Domanda 74
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription. Solution: You assign the Owner role at the subscription level to Admin1. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Assigning the Owner role at the subscription level to Admin1 meets the goal because the Owner role provides full access to all resources within the subscription. This includes the ability to enable and configure Traffic Analytics, ensuring that Admin1 has the necessary permissions and control to manage this feature effectively. Q74 · June 30, 2026 96/951

---

## Domanda 75
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription. Solution: You assign the Reader role at the subscription level to Admin1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Assigning the Reader role at the subscription level to Admin1 does not meet the goal. The Reader role provides read-only access to resources, which allows viewing information but not configuring or enabling features such as Traffic Analytics. To enable Traffic Analytics, Admin1 would need the Network Contributor, Contributor, or Owner role, which have the necessary permissions to configure and manage network resources. Q75 · June 30, 2026 97/951

---

## Domanda 76
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a user named User1. You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege. Which role-based access control (RBAC) role should you assign to User1?

- **A.** Owner
- **B.** Virtual Machine Contributor
- **C.** Contributor **← CORRETTA**
- **D.** Virtual Machine Administrator Login

**Risposta corretta:** C

**Spiegazione:** To ensure that User1 can deploy virtual machines and manage virtual networks while adhering to the principle of least privilege, the Contributor role should be assigned. The Contributor role grants full access to manage all resources, which includes the capability to manage both virtual machines and virtual networks, but it does not allow for the assignment of roles in Azure RBAC, thus providing the necessary permissions without exceeding the required privilege level. Q76 · June 30, 2026 98/951

---

## Domanda 77
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure Active Directory (Azure AD) tenant that contains three global administrators named Admin1, Admin2, and Admin3. The tenant is associated to an Azure subscription. Access control for the subscription is configured as shown in the Access control exhibit. (Click the AccessControl tab.) You sign in to the Azure portal as Admin1 and configure the tenant as shown in the Tenant exhibit. (Click the Tenant tab.) 99/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 100/951

**Risposta corretta:** Admin1 can add Admin 2 as an owner of the subscription. -> Yes | Admin3 can add Admin 2 as an owner of the subscription. -> Yes | Admin2 can create a resource group in the subscription. -> No
> Immagini: q077_post0.png

**Spiegazione:** Q77 · June 30, 2026 101/951

---

## Domanda 78
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named RG1. VM1 runs services that will be used to deploy resources to RG1.You need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1. What should you do first?

- **A.** From the Azure portal, modify the Managed Identity settings of VM1 **← CORRETTA**
- **B.** From the Azure portal, modify the Access control (IAM) settings of RG1
- **C.** From the Azure portal, modify the Access control (IAM) settings of VM1
- **D.** From the Azure portal, modify the Policies settings of RG1

**Risposta corretta:** A

**Spiegazione:** To ensure that a service running on VM1 can manage the resources in RG1 using the identity of VM1, the first step is to enable a managed identity for VM1. Managed identities for Azure resources provide an automatically managed identity in Azure AD, allowing Azure services to authenticate to other Azure services without using credentials in the code. By modifying the Managed Identity settings of VM1, you can enable this identity, which is essential before assigning any role-based access control (RBAC) permissions in the Access control (IAM) settings of the resource group (RG1). Q78 · June 30, 2026 102/951

---

## Domanda 79
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a resource group named TestRG. You use TestRG to validate an Azure deployment. TestRG contains the following resources: You need to delete TestRG. What should you do first?

- **A.** Modify the backup configurations of VM1 and modify the resource lock type of VNET1
- **B.** Remove the resource lock from VNET1 and delete all data in Vault1 **← CORRETTA**
- **C.** Turn off VM1 and remove the resource lock from VNET1
- **D.** Turn off VM1 and delete all data in Vault1

**Risposta corretta:** B
> Esibito: q079_pre0.png

**Spiegazione:** To delete the resource group TestRG and all its resources, certain prerequisites must be met. Firstly, the resource lock on VNET1 needs to be removed because a resource lock will prevent the deletion of the resource and, consequently, the resource group. Secondly, all data in Vault1 must be deleted since a Recovery Services Vault cannot be deleted if it contains backup data. Therefore, the correct first steps are to remove the resource lock from VNET1 and delete all data in Vault1. Q79 · June 30, 2026 103/951

---

## Domanda 80
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure DNS zone named adatum.com. You need to delegate a subdomain named research.adatum.com to a different DNS server in Azure. What should you do?

- **A.** Create an NS record named research in the adatum.com zone. **← CORRETTA**
- **B.** Create a PTR record named research in the adatum.com zone.
- **C.** Modify the SOA record of adatum.com.
- **D.** Create an A record named *.research in the adatum.com zone.

**Risposta corretta:** A

**Spiegazione:** To delegate a subdomain to a different DNS server, you need to create a name server (NS) record for the subdomain. The NS record will specify the authoritative DNS servers responsible for the subdomain, which in this case is research.adatum.com. This ensures that any queries for the subdomain are directed to the correct DNS servers. The other options (PTR, SOA, and A records) are not appropriate for delegating a subdomain. Q80 · June 30, 2026 104/951

---

## Domanda 81
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure Active Directory (Azure AD) tenant that has the contoso.onmicrosoft.com domain name. You have a domain name of contoso.com registered at a third-party registrar. You need to ensure that you can create Azure AD users that have names containing a suffix of @contoso.com. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Add a custom name -> 2. Add a record to the public contoso.com DNS zone -> 3. Verify the domain
> Immagini: q081_post0.png

**Spiegazione:** 1. Add the custom domain name to your directory 2. Add a DNS entry for the domain name at the domain name registrar 3. Verify the custom domain name in Azure AD Reference: https://docs.microsoft.com/en-us/azure/dns/dns-web-sites-custom-domain 105/951 Q81 · June 30, 2026 106/951

---

## Domanda 82
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error events from a table named Event. Which query should you run in Workspace1?

- **A.** Get-Event Event | where {$_.EventType == "error"}
- **B.** Event | search "error" **← CORRETTA**
- **C.** select * from Event where EventType == "error"
- **D.** search in (Event) * | where EventType ג€"eq ג€errorג€

**Risposta corretta:** B

**Spiegazione:** To view the error events from a table named Event in Azure Log Analytics, the query syntax used should be in Kusto Query Language (KQL). The correct KQL query that fits this requirement is Event | search "error". This query searches for the term 'error' across all columns in the Event table, which directly meets the need to view error events. Q82 · June 30, 2026 107/951

---

## Domanda 83
*Tipo: multiple_choice · fonte: text_layer*

You have a registered DNS domain named contoso.com. You create a public Azure DNS zone named contoso.com. You need to ensure that records created in the contoso.com zone are resolvable from the internet. What should you do?

- **A.** Create NS records in contoso.com.
- **B.** Modify the SOA record in the DNS domain registrar.
- **C.** Create the SOA record in contoso.com.
- **D.** Modify the NS records in the DNS domain registrar. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that records created in the contoso.com zone are resolvable from the internet, you need to delegate the domain to Azure DNS. This is done by modifying the NS (Name Server) records at the DNS domain registrar for contoso.com to point to the Azure DNS name servers. This will make the Azure DNS zone authoritative for the domain, allowing it to resolve the DNS queries for contoso.com. Q83 · June 30, 2026 108/951

---

## Domanda 84
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains a storage account named storage1. The subscription is linked to an Azure Active Directory (Azure AD) tenant named contoso.com that syncs to an on-premises Active Directory domain. The domain contains the security principals shown in the following table. In Azure AD, you create a user named User2. The storage1 account contains a file share named share1 and has the following configurations. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 109/951

**Risposta corretta:** You can assign the Storage File Data SMB Share Contributor role to User1 for share1. -> Yes | You can assign the Storage File Data SMB Share Reader role to Computer1 for share1. -> No | You can assign the Storage File Data SMB Share Elevated Contributor role to User2 for share1. -> Yes
> Immagini: q084_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/storage/files/storage-files-identity-ad-ds-assign- permissions?tabs=azure-portal Q84 · June 30, 2026 110/951

---

## Domanda 85
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains a virtual network VNet1. You add the users in the following table. Which user can perform each configuration? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Add a subnet to VNet1 -> User1 and User3 only | Assign a user the Reader role to VNet1 -> User1 only
> Immagini: q085_post0.png

**Spiegazione:** Box 1: User1 and User3 only. User1: The Owner Role lets you manage everything, including access to resources. User3: The Network Contributor role lets you manage networks, including creating subnets. Box 2: User1 only. 111/951 The Security Admin role: In Security Center only: Can view security policies, view security states, edit security policies, view alerts and recommendations, dismiss alerts and recommendations. Reference: https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider- operations#microsoftnetwork Q85 · June 30, 2026 112/951

---

## Domanda 86
*Tipo: hotspot · fonte: manual_vision*

You have the Azure resources shown on the following exhibit. You plan to track resource usage and prevent the deletion of resources. To which resources can you apply locks and tags? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 113/951

**Risposta corretta:** Locks -> Sub1, RG1, and VM1 only | Tags -> Sub1, RG1, and VM1 only
> Immagini: q086_post0.png

**Spiegazione:** Box 1: Sub1, RG1, and VM1 only - You can lock a subscription, resource group, or resource to prevent other users in your organization from accidentally deleting or modifying critical resources. Box 2: Sub1, RG1, and VM1 only - You apply tags to your Azure resources, resource groups, and subscriptions. Reference: https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources? tabs=json https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag- resources?tabs=json 114/951 Q86 · June 30, 2026 115/951

---

## Domanda 87
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant. You plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center. You need to create and upload a file for the bulk delete. Which user attributes should you include in the file?

- **A.** The user principal name and usage location of each user only
- **B.** The user principal name of each user only **← CORRETTA**
- **C.** The display name of each user only
- **D.** The display name and usage location of each user only
- **E.** The display name and user principal name of each user only

**Risposta corretta:** B

**Spiegazione:** To perform a bulk delete of users in Azure Active Directory, you must create and upload a CSV file that includes the user principal name (UPN) of each user. The UPN uniquely identifies each user in Azure AD and is the primary attribute required for user account management operations, including deletions. Thus, including only the UPN in the file is sufficient for bulk deletion purposes. Q87 · June 30, 2026 116/951

---

## Domanda 88
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table. You assign an Azure policy that has the following settings: Scope: Sub1 Exclusions: Sub1/RG1/VNET1 Policy definition: Append a tag and its value to resources Policy enforcement: Enabled Tag name: Tag4 Tag value: value4 You assign tags to the resources as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 117/951

**Risposta corretta:** RG1 has the Tag2:IT tag assigned only -> No | Storage1 has the Tag1:subscription, Tag2:IT, Tag3:value1, and Tag4:value4 tags assigned. -> No | VNET1 has the Tag2:IT and Tag3:value2 tags assigned only -> No
> Immagini: q088_post0.png

**Spiegazione:** Box 1: No - The Azure Policy will add Tag4 to RG1. Box 2: No - Tags applied to the resource group or subscription aren't inherited by the resources although you can enable inheritance with Azure Policy. Storage1 has Tag3: Value1 and the Azure Policy will add Tag4. Box 3: No - Tags applied to the resource group or subscription aren't inherited by the resources so VNET1 does not have Tag2. VNET1 has Tag3:value2. VNET1 is excluded from the Azure Policy so Tag4 will not be added to VNET1. Reference: https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources? tabs=json Q88 · June 30, 2026 118/951

---

## Domanda 89
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription. Solution: You assign the Traffic Manager Contributor role at the subscription level to Admin1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Assigning the Traffic Manager Contributor role to Admin1 at the subscription level will not meet the goal of enabling Traffic Analytics for the Azure subscription. The Traffic Manager Contributor role is specifically for managing Traffic Manager profiles and does not provide the necessary permissions to enable Traffic Analytics. Enabling Traffic Analytics requires roles such as Network Contributor or higher, like Owner or Contributor, at the subscription level. Therefore, the correct answer is No. Q89 · June 30, 2026 119/951

---

## Domanda 90
*Tipo: multiple_choice · fonte: text_layer*

You have three offices and an Azure subscription that contains an Azure Active Directory (Azure AD) tenant. You need to grant user management permissions to a local administrator in each office. What should you use?

- **A.** Azure AD roles
- **B.** administrative units **← CORRETTA**
- **C.** access packages in Azure AD entitlement management
- **D.** Azure roles

**Risposta corretta:** B

**Spiegazione:** To grant user management permissions to a local administrator in each office, administrative units are the ideal choice. Administrative units in Azure AD allow for the delegation of administrative permissions to specific groups of users or administrators based on organizational structure or location. This provides a more granular and decentralized approach to user management, ensuring that local administrators can manage users and resources within their respective offices without having broader administrative rights across the entire Azure AD tenant. Other options like Azure AD roles or Azure roles are more suitable for broader permissions and may not offer the necessary granularity needed for managing users based on their office locations. Q90 · June 30, 2026 120/951

---

## Domanda 91
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers. Subscription1 contains a resource group named Dev. You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group. Solution: On Dev, you assign the Logic App Contributor role to the Developers group. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Assigning the Logic App Contributor role to the Developers group on the Dev resource group will meet the goal of providing the Developers group with the ability to create Azure logic apps in the Dev resource group. The Logic App Contributor role grants users the permissions necessary to create, update, and delete logic apps, as well as managing related resources within the scope of the resource group. This ensures that members of the Developers group can work within the Dev resource group to create and manage logic apps without needing broader permissions within the subscription. Q91 · June 30, 2026 121/951

---

## Domanda 92
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Load Balancer named LB1. You assign a user named User1 the roles shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 122/951

**Risposta corretta:** User1 can [answer choice] LB1. -> assign access to other users for | User1 can [answer choice] the resource group. -> delete a virtual machine from
> Immagini: q092_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#virtual-machine- contributor https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory- admin-roles Q92 · June 30, 2026 123/951

---

## Domanda 93
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the Owner role for VNet1. **← CORRETTA**
- **C.** Assign User1 the Contributor role for VNet1.
- **D.** Assign User1 the Network Contributor role for VNet1.

**Risposta corretta:** B

**Spiegazione:** To ensure that User1 can assign the Reader role for VNet1 to other users, User1 needs to have the Owner role for VNet1. The Owner role grants full access to manage all resources, including the ability to assign roles in Azure Role-Based Access Control (RBAC). Without the Owner role or the User Access Administrator role, User1 will not have the necessary permissions to assign roles to other users. Therefore, assigning User1 the Owner role for VNet1 is the correct action to fulfill the requirement. Q93 · June 30, 2026 124/951

---

## Domanda 94
*Tipo: hotspot · fonte: manual_vision*

You configure the custom role shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 125/951

**Risposta corretta:** To ensure that users can sign in to virtual machines that are assigned role1, modify the [answer choice] section -> dataActions | To ensure that role1 can be assigned only to a resource group named RG1, modify the [answer choice] section -> assignableScopes
> Immagini: q094_post0.png

**Spiegazione:** Q94 · June 30, 2026 126/951

---

## Domanda 95
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a file share named share1. The subscription is linked to a hybrid Azure Active Directory (Azure AD) tenant that contains a security group named Group1.You need to grant Group1 the Storage File Data SMB Share Elevated Contributor role for share1.What should you do first?

- **A.** Enable Active Directory Domain Service (AD DS) authentication for storage1. **← CORRETTA**
- **B.** Grant share-level permissions by using File Explorer.
- **C.** Mount share1 by using File Explorer.
- **D.** Create a private endpoint.

**Risposta corretta:** A

**Spiegazione:** To grant the Storage File Data SMB Share Elevated Contributor role, the first step is to enable Active Directory Domain Service (AD DS) authentication for the storage account. This integration allows Azure AD identities, such as security groups, to manage access to Azure file shares. Once AD DS authentication is enabled, you can then assign the appropriate roles to the security group to manage permissions on the file share. Q95 · June 30, 2026 127/951

---

## Domanda 96
*Tipo: multiple_choice · fonte: text_layer*

You have 15 Azure subscriptions. You have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1. You plan to purchase additional Azure subscription. You need to ensure that Group1 can manage role assignments for the existing subscriptions and the planned subscriptions. The solution must meet the following requirements: Use the principle of least privilege. Minimize administrative effort. What should you do?

- **A.** Assign Group1 the Owner role for the root management group.
- **B.** Assign Group1 the User Access Administrator role for the root management group. **← CORRETTA**
- **C.** Create a new management group and assign Group1 the User Access Administrator role for the group.
- **D.** Create a new management group and assign Group1 the Owner role for the group.

**Risposta corretta:** B

**Spiegazione:** To ensure that Group1 can manage role assignments for all existing and planned subscriptions while adhering to the principle of least privilege and minimizing administrative effort, you should assign Group1 the User Access Administrator role for the root management group. The User Access Administrator role allows group members to manage user access to Azure resources, which includes managing role assignments. Assigning this role at the root management group level ensures that these permissions apply to all subscriptions under that root, both current and future, without providing broader management permissions that come with the Owner role. 128/951 Q96 · June 30, 2026 129/951

---

## Domanda 97
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the hierarchy shown in the following exhibit. You create an Azure Policy definition named Policy1. 130/951 To which Azure resources can you assign Policy1 and which Azure resources can you specify as exclusions from Policy1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can assign Policy1 to -> Tenant Root Group, ManagementGroup1, Subscription1, and RG1 only | You can exclude Policy1 from -> ManagementGroup1, Subscription1, RG1, and VM1 only
> Immagini: q097_post0.png

**Spiegazione:** Q97 · June 30, 2026 131/951

---

## Domanda 98
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com: User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com. You need to create new user accounts in external.contoso.onmicrosoft.com. Solution: You instruct User2 to create the user accounts. Does that meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q098_pre0.png

**Spiegazione:** When a new Azure Active Directory tenant is created, the user who creates it is automatically assigned the Global Administrator role for that tenant. In this scenario, User1 created the new tenant named external.contoso.onmicrosoft.com, so User1 becomes the Global Administrator of that tenant. Therefore, User2, even though they are a Global Administrator in the original tenant (contoso.onmicrosoft.com), does not automatically have any role or permissions in the new tenant 132/951 (external.contoso.onmicrosoft.com). Without being explicitly granted permissions in the new tenant by User1, User2 cannot create new user accounts there. Hence, the solution does not meet the goal. Q98 · June 30, 2026 133/951

---

## Domanda 99
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com: User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com. You need to create new user accounts in external.contoso.onmicrosoft.com. Solution: You instruct User4 to create the user accounts. Does that meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q099_pre0.png

**Spiegazione:** User4, as the Owner of the Azure Subscription, does not have the necessary permissions to create user accounts in the new Azure Active Directory tenant named external.contoso.onmicrosoft.com. Only administrators with the Global Administrator role in the Azure Active Directory tenant have the ability to create new user accounts within that tenant. Since User1 created the new tenant, User1 would have the appropriate permissions to create new user accounts, not User4. 134/951 Q99 · June 30, 2026 135/951

---

## Domanda 100
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com: User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com. You need to create new user accounts in external.contoso.onmicrosoft.com. Solution: You instruct User3 to create the user accounts. Does that meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q100_pre0.png

**Spiegazione:** In the scenario where a new Azure Active Directory (Azure AD) tenant is created, the default global administrator role belongs to the user who created the tenant, which in this case is User1. User3, being a user administrator in the original tenant, does not have any roles or permissions in the new tenant (external.contoso.onmicrosoft.com) by default. Thus, User3 cannot create user accounts in the new tenant unless User1 explicitly grants User3 the necessary permissions in that tenant. Therefore, instructing User3 to create the user accounts does not meet the goal. 136/951 Q100 · June 30, 2026

---

## Domanda 101
*Tipo: multiple_choice · fonte: text_layer*

You have two Azure subscriptions named Sub1 and Sub2. An administrator creates a custom role that has an assignable scope to a resource group named RG1 in Sub1. You need to ensure that you can apply the custom role to any resource group in Sub1 and Sub2. The solution must minimize administrative effort. What should you do?

- **A.** Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes. **← CORRETTA**
- **B.** Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1.
- **C.** Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1.
- **D.** Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for Sub2.

**Risposta corretta:** A

**Spiegazione:** To apply the custom role to any resource group in both subscriptions Sub1 and Sub2, select the custom role and add both Sub1 and Sub2 to the assignable scopes, then remove RG1 from the assignable scopes. This will minimize administrative effort by avoiding the creation of separate custom roles for each subscription. Q101 · June 30, 2026 137/951

---

## Domanda 102
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Subscription that contains a storage account named storageacct1234 and two users named User1 and User2. You assign User1 the roles shown in the following exhibit. Which two actions can User1 perform? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.

- **A.** Assign roles to User2 for storageacct1234.
- **B.** Upload blob data to storageacct1234. **← CORRETTA**
- **C.** Modify the firewall of storageacct1234.
- **D.** View blob data in storageacct1234. **← CORRETTA**
- **E.** View file shares in storageacct1234.

**Risposta corretta:** B, D
> Esibito: q102_pre0.png

**Spiegazione:** 138/951 The suggested answer is B, D. User1 has been assigned two roles: 'Storage Blob Data Contributor' and 'Reader'. The 'Storage Blob Data Contributor' role grants User1 the ability to read, write, and delete blob data in the storage account, which means User1 can upload blob data to storageacct1234. The 'Reader' role, inherited from the resource group, enables User1 to view the resources within the storage account, including the blob data. Therefore, User1 can both upload blob data and view blob data in storageacct1234. Q102 · June 30, 2026 139/951

---

## Domanda 103
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error events from a table named Event. Which query should you run in Workspace1?

- **A.** select * from Event where EventType == "error"
- **B.** Event | search "error"
- **C.** Event | where EventType is "error" **← CORRETTA**
- **D.** Get-Event Event | where {$_.EventType == "error"}

**Risposta corretta:** C

**Spiegazione:** To view error events from the 'Event' table in an Azure Log Analytics workspace, you should use a Kusto Query Language (KQL) command. The correct syntax for filtering data by a specific field is to use the 'where' keyword. The correct query is 'Event | where EventType == "error"'. This command filters events in the 'Event' table where the 'EventType' field equals 'error'. Q103 · June 30, 2026 140/951

---

## Domanda 104
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure App Services web app named App1. You plan to deploy App1 by using Web Deploy. You need to ensure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must use the principle of LEAST privilege. What should you do?

- **A.** Assign the Owner role to the developers
- **B.** Configure app-level credentials for FTPS
- **C.** Assign the Website Contributor role to the developers **← CORRETTA**
- **D.** Configure user-level credentials for FTPS

**Risposta corretta:** C

**Spiegazione:** To ensure that developers can deploy content to App1 using their Azure AD credentials, the permission granted should follow the principle of least privilege. The Website Contributor role is the most appropriate as it allows developers to manage website deployments without granting excessive permissions such as those provided by the Owner role. App-level or user-level FTPS credentials are not relevant to this scenario as they do not involve Azure AD credentials and do not adhere to the principle of least privilege. Therefore, assigning the Website Contributor role to the developers meets the requirements effectively. Q104 · June 30, 2026 141/951

---

## Domanda 105
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: From Azure AD in the Azure portal, you use the Bulk invite users operation. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The solution of using the Bulk invite users operation in Azure AD does not meet the goal because the CSV file only contains the names and email addresses of the 500 external users. To successfully use the Bulk invite users operation, the CSV file must also include a redirection URL, which is a required field along with the email address for inviting users. Therefore, without the redirection URL present in the CSV file, the solution won't work as intended. Q105 · June 30, 2026 142/951

---

## Domanda 106
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains the custom role-based access control (RBAC) roles shown in the following table. From the Azure portal, you need to create two custom roles named Role3 and Role4. Role3 will be an Azure subscription role. Role4 will be an Azure AD role. Which roles can you clone to create the new roles? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Role3 -> Role1 and built-in Azure subscription roles only | Role4 -> Role2 only
> Immagini: q106_post0.png

**Spiegazione:** 143/951 Q106 · June 30, 2026 144/951

---

## Domanda 107
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription named Sub1 that contains two users named User1 and User2. You need to assign role-based access control (RBAC) roles to User1 and User2. The users must be able to perform the following tasks in Sub1: User1 must view the data in any storage account. User2 must assign users the Contributor role for storage accounts. The solution must use the principle of least privilege. Which RBAC role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 -> Reader and Data Access | User2 -> Owner
> Immagini: q107_post0.png

**Spiegazione:** Q107 · June 30, 2026 145/951

---

## Domanda 108
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All the resources are deployed to the East US Azure region. The virtual machines are protected by using NSG1. NSG1 is configured to block all outbound traffic to the internet. You need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative effort What should you configure as the destination of the outbound security rule for NSG1?

- **A.** an application security group
- **B.** a service tag **← CORRETTA**
- **C.** an IP address range

**Risposta corretta:** B

**Spiegazione:** To ensure that the virtual machines can access Vault1 while minimizing administrative effort and adhering to the principle of least privilege, you should configure a service tag as the destination of the outbound security rule for NSG1. Service tags in Azure simplify network security rule management by grouping IP addresses associated with Azure services, such as Azure Key Vault, under a single tag like 'AzureKeyVault'. This approach allows NSG1 to grant VMs precise access to Vault1 without requiring manual IP address management, thereby reducing administrative complexity and enhancing security. Q108 · June 30, 2026 146/951

---

## Domanda 109
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure AD tenant named adatum.com that contains the groups shown in the following table. Adatum.com contains the users shown in the following table. You assign the Azure Active Directory Premium Plan 2 license to Group1 and User4. Which users are assigned the Azure Active Directory Premium Plan 2 license?

- **A.** User4 only
- **B.** User1 and User4 only **← CORRETTA**
- **C.** User1, User2, and User4 only
- **D.** User1, User2, User3, and User4

**Risposta corretta:** B
> Esibito: q109_pre0.png, q109_pre1.png

**Spiegazione:** In this scenario, User1 and User4 are assigned the Azure Active Directory Premium Plan 2 license. User1 receives the license through their membership in Group1, which has the license assigned directly. User4 receives the license directly assigned to them. According to Azure AD's group-based 147/951 licensing, the licenses do not propagate to nested groups. Therefore, User2 and User3 do not receive the license because Group2 and Group3 are nested members of Group1. Only the immediate first- level user members of Group1, which includes User1, will receive the license. Q109 · June 30, 2026 148/951

---

## Domanda 110
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure AD tenant named contoso.com. You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization. You create an access package as shown in the Access package exhibit. (Click the Access package tab.) You configure the external user lifecycle settings as shown in the Lifecycle exhibit. (Click the Lifecycle tab.) 149/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Litwareinc.com users can be assigned to package1. -> No | After 365 days, fabrikam.com users will be removed from Group1. -> Yes | After 395 days, fabrikam.com users will be removed from the contoso.com tenant. -> Yes
> Immagini: q110_post0.png

**Spiegazione:** Q110 · June 30, 2026 150/951

---

## Domanda 111
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Assign User1 the Network Contributor role for VNet1.
- **B.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **C.** Assign User1 the Owner role for VNet1. **← CORRETTA**
- **D.** Assign User1 the Network Contributor role for RG1.

**Risposta corretta:** C

**Spiegazione:** To ensure that User1 can assign the Reader role for VNet1 to other users, the appropriate action is to assign User1 the Owner role for VNet1. The Owner role has the necessary permissions to manage all aspects of the resource, including assigning roles to other users. Other roles mentioned, such as Network Contributor, do not have the permission to assign roles to others. Removing User1 from the Security Reader role and assigning the Contributor role for RG1 does not provide the specific necessary permissions for assigning roles within VNet1. Q111 · June 30, 2026 151/951

---

## Domanda 112
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the users shown in the following table. The groups are configured as shown in the following table. You have a resource group named RG1 as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. 152/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can assign User2 the Owner role for RG1 by adding Group2 as a member of Group1. -> No | You can assign User3 the Owner role for RG1 by adding Group3 as a member of Group1. -> No | You can assign User3 the Owner role for RG1 by assigning the Owner role to Group3 for RG1. -> Yes
> Immagini: q112_post0.png

**Spiegazione:** Q112 · June 30, 2026 153/951

---

## Domanda 113
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader role for Subscript on 1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the Owner role for VNet1. **← CORRETTA**
- **C.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription 1.
- **D.** Assign User1 the Contributor role for VNet1.

**Risposta corretta:** B

**Spiegazione:** To ensure User1 can assign the Reader role for VNet1 to other users, User1 needs a role that includes the permission to manage role assignments. The Owner role is the appropriate choice because it grants full access to manage all resources, including the ability to assign roles in Azure RBAC. The other roles such as Reader, Security Admin, Security Reader, and Contributor do not provide the permissions necessary to assign roles. Q113 · June 30, 2026 154/951

---

## Domanda 114
*Tipo: multiple_choice · fonte: text_layer*

Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table. You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network. What should you configure?

- **A.** Azure Application Gateway
- **B.** private endpoints **← CORRETTA**
- **C.** a network security group (NSG)
- **D.** Azure Virtual WAN

**Risposta corretta:** B
> Esibito: q114_pre0.png

**Spiegazione:** To ensure that all traffic from VM1 to storage1 travels across the Microsoft backbone network, you should configure private endpoints. Private endpoints allow clients on a virtual network (VNet) to securely access data over a Private Link. The private endpoint uses a separate IP address from the VNet address space for each storage account service. This ensures that network traffic between the clients on the VNet and the storage account traverses over the VNet and a private link on the Microsoft backbone network, eliminating exposure from the public Internet. This configuration increases security and reliability. 155/951 Q114 · June 30, 2026 156/951

---

## Domanda 115
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains a user named User1 and the resources shown in the following table. NSG1 is associated to networkinterface1. User1 has role assignments for NSG1 as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 can create a storage account in RG1. -> Yes | User1 can modify the DNS settings of networkinterface1. -> No | User1 can create an inbound security rule to filter inbound traffic to networkinterface1. -> Yes
> Immagini: q115_post0.png

**Spiegazione:** 157/951 Q115 · June 30, 2026 158/951

---

## Domanda 116
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the Access Administrator role for VNet1. **← CORRETTA**
- **C.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- **D.** Assign User1 the Network Contributor role for RG1.

**Risposta corretta:** B

**Spiegazione:** To allow User1 to assign the Reader role for VNet1 to other users, User1 must have the necessary permissions to manage access to the virtual network. The role that specifically grants the ability to assign roles to users is the Access Administrator role. This role provides the 'Microsoft.Authorization/roleAssignments/write' permission, which is required to add and remove role assignments. Therefore, assigning User1 the Access Administrator role for VNet1 will enable them to assign the Reader role to other users. Q116 · June 30, 2026 159/951

---

## Domanda 117
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have three Azure subscriptions named Sub1, Sub2, and Sub3 that are linked to an Azure AD tenant. The tenant contains a user named User1, a security group named Group1, and a management group named MG1. User is a member of Group1. Sub1 and Sub2 are members of MG1. Sub1 contains a resource group named RG1. RG1 contains five Azure functions. You create the following role assignments for MG1: Group1: Reader User1: User Access Administrator You assign User the Virtual Machine Contributor role for Sub1 and Sub2.

**Risposta corretta:** The Group1 members can view the configurations of the Azure functions. -> Yes | User1 can assign the Owner role for RG1. -> Yes | User1 can create a new resource group and deploy a virtual machine to the new group. -> No
> Immagini: q117_post0.png

**Spiegazione:** 160/951 Q117 · June 30, 2026

---

## Domanda 118
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to assign User1 the Storage File Data SMB Share Contributor role for share1. What should you do first?

- **A.** Enable identity-based data access for the file shares in storage1. **← CORRETTA**
- **B.** Modify the security profile for the file shares in storage1.
- **C.** Select Default to Azure Active Directory authorization in the Azure portal for storage1.
- **D.** Configure Access control (IAM) for share1.

**Risposta corretta:** A
> Esibito: q118_pre0.png

**Spiegazione:** To allocate the Storage File Data SMB Share Contributor role to User1 for share1, the initial step is to authorize identity-based data access for the file shares in storage1. This action guarantees that individual user access is properly authenticated, adhering to Azure's security protocols. Subsequent to this, you can proceed to configure Access control (IAM) to assign the specific role to User1. Q118 · June 30, 2026 161/951

---

## Domanda 119
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the User Access Administrator role for VNet1. **← CORRETTA**
- **C.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **D.** Assign User1 the Contributor role for VNet1.

**Risposta corretta:** B

**Spiegazione:** To ensure that User1 can assign the Reader role for VNet1 to other users, User1 needs to have the User Access Administrator role for VNet1. This role allows a user to manage user access to Azure resources, providing the necessary permissions to assign roles like Reader to other users. Q119 · June 30, 2026 162/951

---

## Domanda 120
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure AD tenant named adatum.com that contains the groups shown in the following table. Adatum.com contains the users shown in the following table. You assign an Azure Active Directory Premium P2 license to Group1 as shown in the following exhibit. 163/951 Group2 is NOT directly assigned a license. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can assign User1 the Microsoft Defender for Cloud Apps Discovery license. -> Yes | You can remove the Azure Active Directory Premium P2 license from User1. -> No | User2 is assigned the Azure Active Directory Premium P2. -> No
> Immagini: q120_post0.png

**Spiegazione:** 164/951 Q120 · June 30, 2026 165/951

---

## Domanda 121
*Tipo: hotspot · fonte: manual_vision*

You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table. You need to modify the JobTitle and UsageLocation attributes for the users. For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** JobTitle -> User1 and User3 only | UsageLocation -> User1, User2, and User3
> Immagini: q121_post0.png

**Spiegazione:** 166/951 Q121 · June 30, 2026 167/951

---

## Domanda 122
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each external user. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The New-MgUser cmdlet is used to create new users in Azure AD. However, for creating guest users (external users), the appropriate approach is to invite them using the New-AzureADMSInvitation cmdlet or a similar command in the Microsoft Graph module. Therefore, creating guest user accounts using New-MgUser does not meet the goal. Q122 · June 30, 2026 168/951

---

## Domanda 123
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgInvitation cmdlet for each external user. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Using a PowerShell script with the New-MgInvitation cmdlet for each external user listed in the CSV file will effectively create a guest user account in the Azure AD tenant for each of the 500 external users. The New-MgInvitation cmdlet sends an invitation email to each external user, and when the user accepts the invitation, their guest account is created in the directory. This approach is a valid method to achieve the goal of creating guest user accounts in contoso.com for the 500 external users. Q123 · June 30, 2026 169/951

---

## Domanda 124
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Assign User1 the Contributor role for VNet1.
- **B.** Assign User1 the Network Contributor role for VNet1.
- **C.** Assign User1 the User Access Administrator role for VNet1. **← CORRETTA**
- **D.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.

**Risposta corretta:** C

**Spiegazione:** To ensure that User1 can assign the Reader role for VNet1 to other users, User1 needs to have permissions to manage access to Azure resources, which includes role assignments. The User Access Administrator role is specifically designed for this purpose, as it allows the management of user access to Azure resources. Therefore, assigning User1 the User Access Administrator role for VNet1 is the correct action. Q124 · June 30, 2026 170/951

---

## Domanda 125
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. User named User1 has the following roles for Subscription1: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- **B.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **C.** Assign User1 the Network Contributor role for VNet1.
- **D.** Assign User1 the User Access Administrator role for VNet1. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To allow User1 to assign the Reader role for VNet1 to other users, User1 needs specific Role-Based Access Control (RBAC) permissions that allow managing user roles. The User Access Administrator role includes permissions to manage user access to Azure resources, making it the correct choice for this requirement. Q125 · June 30, 2026 171/951

---

## Domanda 126
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage. You need to use AzCopy to copy data to the blob storage and file storage in storage1. Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Blob storage -> Azure AD and shared access signatures (SAS) | File storage -> Shared access signatures (SAS) only
> Immagini: q126_post0.png

**Spiegazione:** 172/951 Q126 · June 30, 2026 173/951

---

## Domanda 127
*Tipo: hotspot · fonte: manual_vision*

You have an Azure AD tenant that contains a user named External User. External User authenticates to the tenant by using external195@gmail.com. You need to ensure that External User authenticates to the tenant by using contractor@gmail.com. Which two settings should you configure from the Overview blade? To answer, select the appropriate settings in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Setting 1 -> Identities | Setting 2 -> B2B collaboration
> Immagini: q127_post0.png

**Spiegazione:** 174/951 Q127 · June 30, 2026 175/951

---

## Domanda 128
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to assign Workspace1 a role to allow read, write, and delete operations for the data stored in the containers of storage1. Which role should you assign?

- **A.** Storage Account Contributor
- **B.** Contributor
- **C.** Storage Blob Data Contributor **← CORRETTA**
- **D.** Reader and Data Access

**Risposta corretta:** C
> Esibito: q128_pre0.png

**Spiegazione:** To allow read, write, and delete operations for the data stored in the containers of storage1, the appropriate role to assign is 'Storage Blob Data Contributor.' This role specifically provides the necessary permissions to manage the data within Azure Storage containers and blobs, including read, write, and delete actions. The other options either do not grant the required permissions for data actions or are too general and not focused on storage blobs specifically. Q128 · June 30, 2026 176/951

---

## Domanda 129
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: Reader Security Admin Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?

- **A.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- **B.** Assign User1 the Contributor role for VNet1.
- **C.** Assign User1 the Owner role for VNet1. **← CORRETTA**
- **D.** Assign User1 the Network Contributor role for RG1.

**Risposta corretta:** C

**Spiegazione:** To assign roles to other users, a user must have either the Owner role or User Access Administrator role. The Owner role contains all permissions of Contributor and can manage access to resources, including assigning roles to other users. Therefore, assigning User1 the Owner role for VNet1 ensures that User1 can assign the Reader role for VNet1 to other users. Q129 · June 30, 2026 177/951

---

## Domanda 130
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure AD tenant that contains the groups shown in the following table. You purchase Azure Active Directory Premium P2 licenses. To which groups can you assign a license?

- **A.** Group1 only
- **B.** Group1 and Group3 only
- **C.** Group3 and Group4 only
- **D.** Group1, Group2, and Group3 only **← CORRETTA**
- **E.** Group1, Group2, Group3, and Group4

**Risposta corretta:** D
> Esibito: q130_pre0.png

**Spiegazione:** You can assign Azure AD Premium P2 licenses to security groups and Microsoft 365 groups that have security enabled. Group1 is a security group and is security-enabled, Group2 is a mail-enabled security group which is also security-enabled, and Group3 is a Microsoft 365 group which is security- enabled. Group4, being a Microsoft 365 group with security disabled, cannot be assigned licenses. Therefore, you can assign licenses to Group1, Group2, and Group3 only. 178/951 Q130 · June 30, 2026

---

## Domanda 131
*Tipo: hotspot · fonte: manual_vision*

You have an Azure AD tenant. You need to create a Microsoft 365 group that contains only members of a marketing department in France. How should you complete the dynamic membership rule? To answer, select the appropriate options in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Box 1 -> user.department | Box 2 -> and | Box 3 -> -eq
> Nota: Regola completa: (user.department -eq "Marketing") and (user.country -eq "France")
> Immagini: q131_post0.png

**Spiegazione:** Q131 · June 30, 2026 179/951

---

## Domanda 132
*Tipo: hotspot · fonte: manual_vision*

You have an Azure AD tenant. You need to modify the Default user role permissions settings for the tenant. The solution must meet the following requirements: Standard users must be prevented from creating new service principals. Standard users must only be able to use PowerShell or Microsoft Graph to manage their own Azure resources. Which two settings should you modify? To answer, select the appropriate settings in the answer area. NOTE: Each correct answer is worth one point. 180/951

**Risposta corretta:** Users can register applications -> Yes | Restrict access to Azure AD administration portal -> No
> Nota: Due interruttori evidenziati nel pannello User settings
> Immagini: q132_post0.png

**Spiegazione:** 181/951 Q132 · June 30, 2026 182/951

---

## Domanda 133
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table. Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope. You have a condition named Condition1 as shown in the following exhibit. You have a condition named Condition2 as shown in the following exhibit. You assign roles to User1 and User2 as shown in the following table. 183/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 can read blob2. -> No | User1 can read blob3. -> No | User2 can read blob1. -> Yes
> Immagini: q133_post0.png

**Spiegazione:** Q133 · June 30, 2026 184/951

---

## Domanda 134
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each user. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To create a guest user account for external users in Azure AD, you should use the 'New-MgInvitation' cmdlet. This cmdlet is specifically designed to invite external users to your directory by sending them an invitation. The 'New-MgUser' cmdlet, on the other hand, is used for creating regular user accounts within the directory, not guest accounts. Therefore, the solution provided does not meet the goal. Q134 · June 30, 2026 185/951

---

## Domanda 135
*Tipo: hotspot_yes_no · fonte: manual_vision*

You purchase a new Azure subscription. You create an Azure Resource Manager (ARM) template named deploy.json as shown in the following exhibit. 186/951 187/951 You connect to the subscription and run the following command. `New-AzDeployment -Location westus -TemplateFile "deploy.json"` For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Three resource groups are created when you run the script. -> No | A resource group named RGroup5 is created. -> No | All the resource groups are created in the East US Azure region. -> Yes
> Immagini: q135_post0.png

**Spiegazione:** Q135 · June 30, 2026 188/951

---

## Domanda 136
*Tipo: multiple_choice · fonte: text_layer*

Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table. You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network. What should you configure?

- **A.** Azure AD Application Proxy
- **B.** private endpoints **← CORRETTA**
- **C.** a network security group (NSG)
- **D.** Azure Peering Service

**Risposta corretta:** B
> Esibito: q136_pre0.png

**Spiegazione:** To ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network, you should configure private endpoints. A private endpoint is a network interface that uses a private IP address from your virtual network. This network interface connects you privately and securely to a service that is powered by Azure Private Link. By enabling a private endpoint, traffic between VM1 and storage1 will traverse the Microsoft backbone network, avoiding the public internet. Q136 · June 30, 2026 189/951

---

## Domanda 137
*Tipo: multiple_choice · fonte: text_layer*

Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table. You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network. What should you configure?

- **A.** Azure AD Application Proxy
- **B.** service endpoints **← CORRETTA**
- **C.** a network security group (NSG)
- **D.** Azure Firewall

**Risposta corretta:** B
> Esibito: q137_pre0.png

**Spiegazione:** To ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network, you need to configure service endpoints. Service endpoints provide secure and direct connectivity to Azure services by extending the VNet private IP address space to those services. This ensures that traffic between the VM and the storage account remains on the Azure network, avoiding any potential exposure to the public internet. Q137 · June 30, 2026 190/951

---

## Domanda 138
*Tipo: multiple_choice · fonte: text_layer*

Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table. You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network. What should you configure?

- **A.** Azure Application Gateway
- **B.** service endpoints **← CORRETTA**
- **C.** a network security group (NSG)
- **D.** Azure Peering Service

**Risposta corretta:** B
> Esibito: q138_pre0.png

**Spiegazione:** To ensure that all traffic from VM1 to storage1 travels across the Microsoft backbone network, you should configure service endpoints. Service endpoints provide direct connectivity to Azure services over an optimized route on the Azure backbone network. This setup ensures that traffic between your virtual network (VNet1) and the Azure Storage account (storage1) does not traverse the public internet, but rather stays within the Microsoft network, thus providing better security and performance. 191/951 Q138 · June 30, 2026

---

## Domanda 139
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Sub1 that contains the resources shown in the following table. You create a user named Admin1. To what can you add Admin1 as a co-administrator?

- **A.** RG1
- **B.** MG1
- **C.** Sub1 **← CORRETTA**
- **D.** VM1

**Risposta corretta:** C
> Esibito: q139_pre0.png

**Spiegazione:** Admin1 can be added as a co-administrator to Sub1, the subscription. Co-administrators have full access to all resources within a subscription, including the capabilities to create, read, update, and delete resources. This role can only be assigned at the subscription level and not at the level of management groups, resource groups, or virtual machines. Q139 · June 30, 2026 192/951

---

## Domanda 140
*Tipo: hotspot · fonte: manual_vision*

You have a Microsoft Entra tenant that contains the groups shown in the following table. The tenant contains the users shown in the following table. Which users and groups can you delete? To answer, select the appropriate options in the answer area. Note: Each correct selection is worth one point. 193/951

**Risposta corretta:** Users -> User1, User2, User3, and User4 | Groups -> Group2 and Group4 only
> Immagini: q140_post0.png

**Spiegazione:** 194/951 Q140 · June 30, 2026

---

## Domanda 141
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to ensure that data transfers between storage1 and VM1 do NOT traverse the internet What should you configure for storage1?

- **A.** data protection
- **B.** a private endpoint **← CORRETTA**
- **C.** Public network access in the Firewalls and virtual networks settings
- **D.** a shared access signature (SAS)

**Risposta corretta:** B
> Esibito: q141_pre0.png

**Spiegazione:** To ensure that data transfers between storage1 and VM1 do not traverse the internet, you should configure a private endpoint for storage1. A private endpoint provides a private IP address in your virtual network, enabling you to securely connect to the storage account using this private IP. This ensures that the traffic stays within the Azure backbone network, thereby avoiding the public internet entirely. Q141 · June 30, 2026 195/951

---

## Domanda 142
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have a Microsoft Entra tenant that is linked to the subscriptions shown in the following table. You have the resource groups shown in the following table. You assign roles to users as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 can resize VM1. -> Yes | User2 can create a new storage account in RG1. -> No | User3 can assign User1 the Owner role for RG3. -> Yes
> Immagini: q142_post0.png

**Spiegazione:** 196/951 Q142 · June 30, 2026 197/951

---

## Domanda 143
*Tipo: multiple_choice · fonte: text_layer*

Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table. You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network. What should you configure?

- **A.** a network security group (NSG)
- **B.** private endpoints **← CORRETTA**
- **C.** Microsoft Entra Application Proxy
- **D.** Azure Virtual WAN

**Risposta corretta:** B
> Esibito: q143_pre0.png

**Spiegazione:** Q143 · June 30, 2026 198/951

---

## Domanda 144
*Tipo: multiple_choice · fonte: text_layer*

You have a Microsoft Entra tenant. You plan to perform a bulk import of users. You need to ensure that imported user objects are added automatically as the members of a specific group based on each user's department. The solution must minimize administrative effort. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Create groups that use the Assigned membership type.
- **B.** Create an Azure Resource Manager (ARM) template.
- **C.** Create groups that use the Dynamic User membership type. **← CORRETTA**
- **D.** Write a PowerShell script that parses an import file.
- **E.** Create an XML file that contains user information and the appropriate attributes.
- **F.** Create a CSV file that contains user information and the appropriate attributes. **← CORRETTA**

**Risposta corretta:** C, F

**Spiegazione:** Q144 · June 30, 2026 199/951

---

## Domanda 145
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. You need to ensure that the access keys for storage1 rotate automatically. What should you configure?

- **A.** a backup vault
- **B.** redundancy for storage1
- **C.** lifecycle management for storage1
- **D.** an Azure key vault **← CORRETTA**
- **E.** a Recovery Services vault

**Risposta corretta:** D

**Spiegazione:** Q145 · June 30, 2026 200/951

---

## Domanda 146
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the Microsoft Entra identities shown in the following table. You need to enable self-service password reset (SSPR). For which identities can you enable SSPR in the Azure portal?

- **A.** User1 only
- **B.** Group1 only
- **C.** User1 and Group1 only
- **D.** Group1 and Group2 only **← CORRETTA**
- **E.** User1, Group1, and Group2

**Risposta corretta:** D
> Esibito: q146_pre0.png

**Spiegazione:** Q146 · June 30, 2026 201/951

---

## Domanda 147
*Tipo: drag_and_drop · fonte: manual_vision*

You have a Microsoft Entra tenant. You need to ensure that when a new Microsoft 365 group is created, the group name is automatically formatted as follows: Which three actions should you perform in sequence in the Microsoft Entra admin center? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Create a group naming policy. -> 2. Set Add prefix to Attribute. -> 3. Set Select type to Department.
> Immagini: q147_post0.png

**Spiegazione:** 202/951 Q147 · June 30, 2026 203/951

---

## Domanda 148
*Tipo: hotspot · fonte: manual_vision*

You have a Microsoft Entra tenant that contains the users shown in the following table. The tenant contains the groups shown in the following table. Which users and groups can be deleted? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Users -> User1, User2, User3, and User4 | Groups -> Group1 and Group3 only
> Immagini: q148_post0.png

**Spiegazione:** 204/951 Q148 · June 30, 2026 205/951

---

## Domanda 149
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. You plan to use an Azure key vault to provide a secret to app1. What should you create for app1 to access the key vault, and from which key vault can the secret be used? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Create a -> Managed identity | Use the secret from -> Vault1, Vault2, or Vault3
> Immagini: q149_post0.png

**Spiegazione:** 206/951 Q149 · June 30, 2026 207/951

---

## Domanda 150
*Tipo: multiple_choice · fonte: text_layer*

You have a Microsoft Entra tenant named contoso.com. You collaborate with an external partner named fabrikam.com. You plan to invite users in fabrikam.com to the contoso.com tenant. You need to ensure that invitations can be sent only to fabrikam.com users. What should you do in the Microsoft Entra admin center?

- **A.** From Cross-tenant access settings, configure the Tenant restrictions settings.
- **B.** From Cross-tenant access settings, configure the Microsoft cloud settings.
- **C.** From External collaboration settings, configure the Guest user access restrictions settings.
- **D.** From External collaboration settings, configure the Collaboration restrictions settings. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** Q150 · June 30, 2026 208/951

---

## Domanda 151
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blob data. You need to assign a role to a user named User1 to ensure that the user can access the blob data in storage1. The role assignment must support conditions. Which two roles can you assign to User1? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.

- **A.** Owner
- **B.** Storage Account Contributor
- **C.** Storage Account Backup Contributor
- **D.** Storage Blob Data Contributor **← CORRETTA**
- **E.** Storage Blob Data Owner **← CORRETTA**
- **F.** Storage Blob Delegator

**Risposta corretta:** D, E

**Spiegazione:** Q151 · June 30, 2026 209/951

---

## Domanda 152
*Tipo: hotspot_yes_no · fonte: manual_vision*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 210/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 211/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o a legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 212/951 Follow the principle of LEAST privilege. Grant permissions at the required scope ONLY. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You need to implement the planned change for Attribute1. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Admin1 can assign Attribute1 to Group1. -> No | Admin2 can assign Attribute1 to User1. -> No | Admin3 can assign Attribute1 to Group2. -> No
> Immagini: q152_post0.png

**Spiegazione:** Q152 · June 30, 2026 213/951

---

## Domanda 153
*Tipo: multiple_choice · fonte: text_layer*

You have a Microsoft Entra tenant configured as shown in the following exhibit. The tenant contains the identities shown in the following table. You purchase a Microsoft Fabric license. To which identities can you assign the license?

- **A.** User1 only 214/951 **← CORRETTA**
- **B.** User1 and Group1 only
- **C.** User1 and Group2 only
- **D.** User1, Group1, and Group2

**Risposta corretta:** A
> Esibito: q153_pre0.png, q153_pre1.png

**Spiegazione:** Q153 · June 30, 2026 215/951

---

## Domanda 154
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage. The storage account contains a blob that stores images. Client access to storage1 is granted by using a shared access signature (SAS). You need to ensure that users receive a warning message when they generate a SAS that exceeds a seven-day time period. What should you do for storage?

- **A.** Enable a read-only lock.
- **B.** Configure an alert rule.
- **C.** Add a lifecycle management rule.
- **D.** Set Allow recommended upper limit for shared access signature (SAS) expiry interval to Enabled. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** Q154 · June 30, 2026 216/951

---

## Domanda 155
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table: You plan to use the Azure Import/Export service to export data from Subscription1. You need to identify which storage account can be used to export the data. What should you identify?

- **A.** storage1
- **B.** storage2
- **C.** storage3
- **D.** storage4 **← CORRETTA**

**Risposta corretta:** D
> Esibito: q155_pre0.png

**Spiegazione:** The Azure Import/Export service supports exporting data from Blob storage accounts. Among the given options, only storage4 is a Blob storage account, making it the correct choice for exporting data using the Azure Import/Export service. Q155 · June 30, 2026 217/951

---

## Domanda 156
*Tipo: hotspot · fonte: manual_vision*

You have Azure Storage accounts as shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can use [answer choice] for Azure Table Storage. -> storageaccount1 and storageaccount2 only | You can use [answer choice] for Azure Blob storage. -> all the storage accounts
> Immagini: q156_post0.png

**Spiegazione:** Box 1: storageaccount1 and storageaccount2 only Box 2: All the storage accounts - Note: The three different storage account options are: General-purpose v2 (GPv2) accounts, General- 218/951 purpose v1 (GPv1) accounts, and Blob storage accounts. ✑ General-purpose v2 (GPv2) accounts are storage accounts that support all of the latest features for blobs, files, queues, and tables. ✑ Blob storage accounts support all the same block blob features as GPv2, but are limited to supporting only block blobs. ✑ General-purpose v1 (GPv1) accounts provide access to all Azure Storage services, but may not have the latest features or the lowest per gigabyte pricing. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-account-options Q156 · June 30, 2026 219/951

---

## Domanda 157
*Tipo: multiple_choice · fonte: text_layer*

You have Azure subscription that includes data in following locations: You plan to export data by using Azure import/export job named Export1. You need to identify the data that can be exported by using Export1. Which data should you identify?

- **A.** DB1
- **B.** container1 **← CORRETTA**
- **C.** share1
- **D.** Table1

**Risposta corretta:** B
> Esibito: q157_pre0.png

**Spiegazione:** Azure Import/Export service supports exporting data from Azure Blob Storage, which includes Block blobs, Page blobs, and Append blobs. Given the available options, container1, which is a Blob container, matches the criteria for data that can be exported using the Azure Import/Export job named Export1. Other types such as Azure files share, SQL database, and Azure Table are not supported for export using this service. Q157 · June 30, 2026 220/951

---

## Domanda 158
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Storage account named storage1. You have an Azure App Service app named App1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity. You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements: Minimize the number of secrets used. Ensure that App2 can only read from storage1 for the next 30 days. What should you configure in storage1 for each app? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** App1 -> Access control (IAM) | App2 -> Shared access signatures (SAS)
> Immagini: q158_post0.png

**Spiegazione:** 221/951 Q158 · June 30, 2026 222/951

---

## Domanda 159
*Tipo: hotspot · fonte: manual_vision*

You need to create an Azure Storage account that meets the following requirements: Minimizes costs Supports hot, cool, and archive blob tiers Provides fault tolerance if a disaster affects the Azure region where the account resides How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** --kind -> StorageV2 | --sku -> Standard_GRS
> Nota: Comando: az storage account create -g RG1 -n storageaccount1 --kind StorageV2 --sku Standard_GRS
> Immagini: q159_post0.png

**Spiegazione:** Box 1: StorageV2 - You may only tier your object storage data to hot, cool, or archive in Blob storage and General Purpose v2 (GPv2) accounts. General Purpose v1 (GPv1) accounts do not support tiering. General-purpose v2 accounts deliver the lowest per-gigabyte capacity prices for Azure Storage, as well as industry-competitive transaction prices. Box 2: Standard_GRS - Geo-redundant storage (GRS): Cross-regional replication to protect against region-wide unavailability. Incorrect Answers: Locally-redundant storage (LRS): A simple, low-cost replication strategy. Data is replicated within a single storage scale unit. Read-access geo-redundant storage (RA-GRS): Cross-regional replication with read access to the 223/951 replica. RA-GRS provides read-only access to the data in the secondary location, in addition to geo- replication across two regions, but is more expensive compared to GRS. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy-grs https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers Q159 · June 30, 2026 224/951

---

## Domanda 160
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources in the following table. Store1 contains a file share named data. Data contains 5,000 files. You need to synchronize the files in the file share named data to an on-premises server named Server1. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Create a container instance
- **B.** Register Server1 **← CORRETTA**
- **C.** Install the Azure File Sync agent on Server1 **← CORRETTA**
- **D.** Download an automation script
- **E.** Create a sync group **← CORRETTA**

**Risposta corretta:** B, C, E
> Esibito: q160_pre0.png

**Spiegazione:** To synchronize the files in an Azure file share named data with an on-premises server named Server1, the following steps are necessary: Firstly, install the Azure File Sync agent on Server1 to enable it to sync with the Azure file share. Secondly, register Server1 with the Storage Sync Service to establish a trust relationship between Server1 and Azure. Finally, create a sync group that includes the cloud endpoint (the Azure file share) and the server endpoint (a path on Server1). This setup will ensure the files are synchronized between the Azure and on-premises environments. 225/951 Q160 · June 30, 2026 226/951

---

## Domanda 161
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. The status of VM1 is Running. You assign an Azure policy as shown in the exhibit. (Click the Exhibit tab.) You assign the policy by using the following parameters: 227/951 Microsoft.ClassicNetwork/virtualNetworksMicrosoft.Network/virtualNetworksMicrosoft.Compute/virtualMach each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** An administrator can move VNET1 to RG2 -> Yes | The state of VM1 changed to deallocated -> No | An administrator can modify the address space of VNET2 -> No
> Immagini: q161_post0.png

**Spiegazione:** Q161 · June 30, 2026 228/951

---

## Domanda 162
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains a storage account. You have an on-premises server named Server1 that runs Windows Server 2016. Server1 has 2 TB of data. You need to transfer the data to the storage account by using the Azure Import/Export service. In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order. NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.

**Risposta corretta:** 1. Attach an external disk to Server1 and then run waimportexport.exe -> 2. From the Azure portal, create an import job -> 3. Detach the external disks from Server1 and ship the disks to an Azure data center -> 4. From the Azure portal, update the import job
> Immagini: q162_post0.png

**Spiegazione:** At a high level, an import job involves the following steps: Step 1: Attach an external disk to Server1 and then run waimportexport.exe Determine data to be imported, number of drives you need, destination blob location for your data in Azure storage. Use the WAImportExport tool to copy data to disk drives. Encrypt the disk drives with BitLocker. Step 2: From the Azure portal, create an import job. Create an import job in your target storage account in Azure portal. Upload the drive journal files. Step 3: Detach the external disks from Server1 and ship the disks to an Azure data center. Provide the return address and carrier account number for shipping the drives back to you. Ship the disk drives to the shipping address provided during job creation. Step 4: From the Azure portal, update the import job 229/951 Update the delivery tracking number in the import job details and submit the import job. The drives are received and processed at the Azure data center. The drives are shipped using your carrier account to the return address provided in the import job. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service Q162 · June 30, 2026 230/951

---

## Domanda 163
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have Azure subscription that includes following Azure file shares: You have the following on-premises servers: You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint. You register Server1 and Server2 in Sync1. You add D:\Folder1 on Server1 as a server endpoint of Group1. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** share2 can be added as a cloud endpoint for Group1 -> No | E:\Folder2 on Server1 can be added as a server endpoint for Group1 -> No | D:\Data on Server2 can be added as a server endpoint for Group1 -> Yes
> Immagini: q163_post0.png

**Spiegazione:** 231/951 Q163 · June 30, 2026 232/951

---

## Domanda 164
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription named Subscription1. You create an Azure Storage account named contosostorage, and then you create a file share named data. Which UNC path should you include in a script that references files from the data file share? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.

**Risposta corretta:** 1. contosostorage -> 2. file.core.windows.net -> 3. data
> Nota: Percorso UNC: \\contosostorage.file.core.windows.net\data
> Immagini: q164_post0.png, q164_post1.png

**Spiegazione:** Box 1: contosostorage - The name of account - Box 2: file.core.windows.net - Box 3: data - The name of the file share is data. Example: 233/951 Reference: https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows Q164 · June 30, 2026 234/951

---

## Domanda 165
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains an Azure Storage account. You plan to copy an on-premises virtual machine image to a container named vmimages. You need to create the container for the planned image. Which command should you run? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** azcopy [box 1] -> make | 'https://mystorageaccount.[box 2].core.windows.net/vmimages' -> blob
> Nota: Comando: azcopy make 'https://mystorageaccount.blob.core.windows.net/vmimages'
> Immagini: q165_post0.png

**Spiegazione:** 235/951 Q165 · June 30, 2026 236/951

---

## Domanda 166
*Tipo: hotspot · fonte: manual_vision*

You have an Azure File sync group that has the endpoints shown in the following table. Cloud tiering is enabled for Endpoint3. You add a file named File1 to Endpoint1 and a file named File2 to Endpoint2. On which endpoints will File1 and File2 be available within 24 hours of adding the files? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** File1 -> Endpoint1 only | File2 -> Endpoint1, Endpoint2, and Endpoint3
> Immagini: q166_post0.png

**Spiegazione:** 237/951 Q166 · June 30, 2026 238/951

---

## Domanda 167
*Tipo: hotspot · fonte: manual_vision*

You have several Azure virtual machines on a virtual network named VNet1. You configure an Azure Storage account as shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 239/951

**Risposta corretta:** The virtual machines on the 10.2.9.0/24 subnet will have network connectivity to the file shares in the storage account [answer choice]. -> never | Azure Backup will be able to back up the unmanaged hard disks of the virtual machines in the storage account [answer choice]. -> never
> Immagini: q167_post0.png, q167_post1.png

**Spiegazione:** Box 1: never - The 10.2.9.0/24 subnet is not whitelisted. Box 2: never - After you configure firewall and virtual network settings for your storage account, select Allow trusted Microsoft services to access this storage account as an exception to enable Azure Backup service to access the network restricted storage account. 240/951 Reference: https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows https://azure.microsoft.com/en-us/blog/azure-backup-now-supports-storage-accounts-secured- with-azure-storage-firewalls-and-virtual-networks/ Q167 · June 30, 2026 241/951

---

## Domanda 168
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have a sync group named Sync1 that has a cloud endpoint. The cloud endpoint includes a file named File1.txt. Your on-premises network contains servers that run Windows Server 2016. The servers are configured as shown in the following table. You add Share1 as an endpoint for Sync1. One hour later, you add Share2 as an endpoint for Sync1. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** On the cloud endpoint, File1.txt is overwritten by File1.txt from Share1. -> No | On Server1, File1.txt is overwritten by File1.txt from the cloud endpoint. -> No | File1.txt from Share1 replicates to Share2. -> Yes
> Immagini: q168_post0.png

**Spiegazione:** 242/951 Q168 · June 30, 2026 243/951

---

## Domanda 169
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the storage accounts shown in the following table. You need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration from Azure support. What should you identify?

- **A.** storage1
- **B.** storage2 **← CORRETTA**
- **C.** storage3
- **D.** storage4

**Risposta corretta:** B
> Esibito: q169_pre0.png

**Spiegazione:** Storage2 is the correct answer because it meets the criteria for conversion to zone-redundant storage (ZRS) through a live migration. To be eligible for live migration to ZRS, the storage account needs to be a General Purpose v2 account with Locally-redundant storage (LRS) replication. Storage2 is a General Purpose v2 account and uses LRS replication, making it eligible for live migration to ZRS. Other options either use unsupported account types or have a different replication that needs manual conversion steps before ZRS migration. 244/951 Q169 · June 30, 2026 245/951

---

## Domanda 170
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named account1. You plan to upload the disk files of a virtual machine to account1 from your on-premises network. The on-premises network uses a public IP address space of131.107.1.0/24. You plan to use the disk files to provision an Azure virtual machine named VM1. VM1 will be attached to a virtual network named VNet1. VNet1 uses an IP address space of 192.168.0.0/24. You need to configure account1 to meet the following requirements: Ensure that you can upload the disk files to account1. Ensure that you can attach the disks to VM1. Prevent all other access to account1. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** From the Networking blade of account1, select Selected networks. **← CORRETTA**
- **B.** From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account.
- **C.** From the Networking blade of account1, add the 131.107.1.0/24 IP address range. **← CORRETTA**
- **D.** From the Networking blade of account1, add VNet1.
- **E.** From the Service endpoints blade of VNet1, add a service endpoint.

**Risposta corretta:** A, C

**Spiegazione:** To meet the requirements of uploading the disk files from the on-premises network and attaching the disks to VM1 while preventing all other access, you should select 'Selected networks' in the Networking blade of account1 to limit access to specified networks or IP addresses. Additionally, you 246/951 need to add the 131.107.1.0/24 IP address range to allow access from the on-premises network. These steps ensure that the required networks have access, fulfilling both the need to upload from the on-premises IP and attach to VM1, while blocking other traffic. Q170 · June 30, 2026 247/951

---

## Domanda 171
*Tipo: drag_and_drop · fonte: manual_vision*

You have an on-premises file server named Server1 that runs Windows Server 2016. You have an Azure subscription that contains an Azure file share. You deploy an Azure File Sync Storage Sync Service, and you create a sync group. You need to synchronize files from Server1 to Azure. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Install the Azure File Sync agent on Server1 -> 2. Register Server1 -> 3. Add a server endpoint
> Immagini: q171_post0.png

**Spiegazione:** Step 1: Install the Azure File Sync agent on Server1 The Azure File Sync agent is a downloadable package that enables Windows Server to be synced with an Azure file share Step 2: Register Server1. Register Windows Server with Storage Sync Service Registering your Windows Server with a Storage Sync Service establishes a trust relationship between your server (or cluster) and the Storage Sync Service. Step 3: Add a server endpoint - 248/951 Create a sync group and a cloud endpoint. A sync group defines the sync topology for a set of files. Endpoints within a sync group are kept in sync with each other. A sync group must contain one cloud endpoint, which represents an Azure file share and one or more server endpoints. A server endpoint represents a path on registered server. Reference: https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide Q171 · June 30, 2026 249/951

---

## Domanda 172
*Tipo: hotspot · fonte: manual_vision*

You plan to create an Azure Storage account in the Azure region of East US 2. You need to create a storage account that meets the following requirements: Replicates synchronously. Remains available if a single data center in the region fails. How should you configure the storage account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Replication -> Zone-redundant storage (ZRS) | Account type -> StorageV2 (general purpose v2)
> Immagini: q172_post0.png

**Spiegazione:** Box 1: Zone-redundant storage (ZRS) Zone-redundant storage (ZRS) replicates your data synchronously across three storage clusters in a single region. LRS would not remain available if a data center in the region fails GRS and RA GRS use asynchronous replication. Box 2: StorageV2 (general purpose V2) ZRS only support GPv2. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy-zrs 250/951 Q172 · June 30, 2026 251/951

---

## Domanda 173
*Tipo: multiple_choice · fonte: text_layer*

You plan to use the Azure Import/Export service to copy files to a storage account. Which two files should you create before you prepare the drives for the import job? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** an XML manifest file
- **B.** a dataset CSV file **← CORRETTA**
- **C.** a JSON configuration file
- **D.** a PowerShell PS1 file
- **E.** a driveset CSV file **← CORRETTA**

**Risposta corretta:** B, E

**Spiegazione:** Before you prepare the drives for an import job using the Azure Import/Export service, you need to create two specific files: a dataset CSV file and a driveset CSV file. The dataset CSV file contains the details of the files to be imported, including their names, sizes, and paths on the drive. The driveset CSV file specifies the details of the drives used in the import job, such as the drive letter, path to the drive, and drive name. These files are essential for facilitating the data copy and ensuring the drives are correctly recognized and prepared for the import process. Q173 · June 30, 2026 252/951

---

## Domanda 174
*Tipo: multiple_choice · fonte: text_layer*

You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines. You need to delete the Recovery Services vault. What should you do first?

- **A.** From the Recovery Service vault, delete the backup data.
- **B.** Modify the disaster recovery properties of each virtual machine.
- **C.** Modify the locks of each virtual machine.
- **D.** From the Recovery Service vault, stop the backup of each backup item. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To delete a Recovery Services vault, you must first stop the backup of each backup item. If backups are active, the vault will still be configured to receive backup data and cannot be deleted. Once you stop the backup, you can then proceed to delete the backup data and the vault itself. Q174 · June 30, 2026 253/951

---

## Domanda 175
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains the resources shown in the following table. In storage1, you create a blob container named blob1 and a file share named share1. Which resources can be backed up to Vault1 and Vault2? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 254/951

**Risposta corretta:** Can use Vault1 for backups -> VM1 only | Can use Vault2 for backups -> share1 only
> Immagini: q175_post0.png

**Spiegazione:** Box 1: VM1 only - VM1 is in the same region as Vault1. File1 is not in the same region as Vautl1. SQL is not in the same region as Vault1. Blobs cannot be backup up to service vaults. Note: To create a vault to protect virtual machines, the vault must be in the same region as the virtual machines. Box 2: Share1 only. Storage1 is in the same region (West USA) as Vault2. Share1 is in Storage1. Note: After you select Backup, the Backup pane opens and prompts you to select a storage account from a list of discovered supported storage accounts. They're either associated with this vault or present in the same region as the vault, but not yet associated to any Recovery Services vault. Reference: https://docs.microsoft.com/bs-cyrl-ba/azure/backup/backup-create-rs-vault https://docs.microsoft.com/en-us/azure/backup/backup-afs Q175 · June 30, 2026 255/951

---

## Domanda 176
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** a virtual machine
- **B.** an Azure Cosmos DB database
- **C.** Azure File Storage **← CORRETTA**
- **D.** the Azure File Sync Storage Sync Service

**Risposta corretta:** C

**Spiegazione:** Azure Import/Export service is designed to allow large amounts of data to be securely transferred to Azure by shipping disk drives to an Azure datacenter. This service can be used specifically with Azure Blob storage and Azure File Storage. A virtual machine, Azure Cosmos DB database, and the Azure File Sync Storage Sync Service are not supported as direct destinations for data imported using the Azure Import/Export service. Therefore, Azure File Storage is the correct option for the destination of the imported data. Q176 · June 30, 2026 256/951

---

## Domanda 177
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You create the Azure Storage account shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. 257/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** The minimum number of copies of the storage account will be [answer choice] -> 3 | To reduce the cost of infrequently accessed data in the storage account, you must modify the [answer choice] setting -> Access tier (default)
> Immagini: q177_post0.png

**Spiegazione:** Box 1: 3 - Locally Redundant Storage (LRS) provides highly durable and available storage within a single location (sub region). We maintain an equivalent of 3 copies (replicas) of your data within the primary location as described in our SOSP paper; this ensures that we can recover from common failures (disk, node, rack) without impacting your storage account's availability and durability. Box 2: Access tier - Change the access tier from Hot to Cool. Note: Azure storage offers different access tiers, which allow you to store blob object data in the most cost-effective manner. The available access tiers include: Hot - Optimized for storing data that is accessed frequently. Cool - Optimized for storing data that is infrequently accessed and stored for at least 30 days. Archive - Optimized for storing data that is rarely accessed and stored for at least 180 days with flexible latency requirements (on the order of hours). Reference: https://azure.microsoft.com/en-us/blog/data-series-introducing-locally-redundant-storage-for- windows-azure-storage/ https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob- storage-tiers 258/951 Q177 · June 30, 2026 259/951

---

## Domanda 178
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Storage account named storage1. You plan to use AzCopy to copy data to storage1. You need to identify the storage services in storage1 to which you can copy the data. Which storage services should you identify?

- **A.** blob, file, table, and queue
- **B.** blob and file only **← CORRETTA**
- **C.** file and table only
- **D.** file only
- **E.** blob, table, and queue only

**Risposta corretta:** B

**Spiegazione:** AzCopy is a command-line utility designed to copy data to and from Azure Blob storage and Azure File storage. It does not support copying data to Azure Table storage or Azure Queue storage. Therefore, the correct storage services that can be used with AzCopy in the Azure Storage account are blob and file storage. Q178 · June 30, 2026 260/951

---

## Domanda 179
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage. You need to use AzCopy to copy data to the blob storage and file storage in storage1. Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Blob storage -> Azure Active Directory (Azure AD) and shared access signatures (SAS) only | File storage -> Shared access signatures (SAS) only
> Immagini: q179_post0.png

**Spiegazione:** You can provide authorization credentials by using Azure Active Directory (AD), or by using a Shared Access Signature (SAS) token. Box 1: Both Azure Active Directory (AD) and Shared Access Signature (SAS) token are supported for Blob storage. Box 2: Only Shared Access Signature (SAS) token is supported for File storage. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10 261/951 Q179 · June 30, 2026 262/951

---

## Domanda 180
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains an Azure Storage account. You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage. You need to configure a storage service for Container1. What should you use?

- **A.** Azure Files **← CORRETTA**
- **B.** Azure Blob storage
- **C.** Azure Queue storage
- **D.** Azure Table storage

**Risposta corretta:** A

**Spiegazione:** To configure persistent storage for an Azure Container Instance that will use a Docker image containing a Microsoft SQL Server instance, you should use Azure Files. Azure Files provides fully managed file shares in the cloud that can be mounted as volumes in containers. This ensures that the data persists even if the container is stopped or restarted, making it the appropriate choice for scenarios requiring persistent storage. Q180 · June 30, 2026 263/951

---

## Domanda 181
*Tipo: multiple_choice · fonte: text_layer*

You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2. You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the hardware hostingVM1 and VM2. What should you include in the Availability Set?

- **A.** one update domain
- **B.** two fault domains
- **C.** one fault domain
- **D.** two update domains **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that App1 remains available during planned maintenance of the hardware hosting VM1 and VM2, you should include two update domains in the Availability Set. Update domains enable Azure to perform planned maintenance one domain at a time, ensuring that only one subset of VMs is taken down at any given moment. This allows the other VMs to continue running, maintaining application availability during the maintenance period. Q181 · June 30, 2026 264/951

---

## Domanda 182
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** an Azure Cosmos DB database
- **B.** Azure Blob storage **← CORRETTA**
- **C.** Azure Data Lake Store
- **D.** the Azure File Sync Storage Sync Service

**Risposta corretta:** B

**Spiegazione:** Azure Import/Export service is used to securely transfer large amounts of data to Azure by shipping disk drives to an Azure datacenter. The primary destinations for imported data using this service are Azure Blob storage and Azure Files. The service does not support direct import to Azure Cosmos DB, Azure Data Lake Store, or the Azure File Sync Storage Sync Service. Therefore, the correct option for the destination of the imported data is Azure Blob storage. Q182 · June 30, 2026 265/951

---

## Domanda 183
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains an Azure file share. You have an on-premises server named Server1 that runs Windows Server 2016. You plan to set up Azure File Sync between Server1 and the Azure file share. You need to prepare the subscription for the planned Azure File Sync. Which two actions should you perform in the Azure subscription? To answer, drag the appropriate actions to the correct targets. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.

**Risposta corretta:** 1. Create a Storage Sync Service -> 2. Create a sync group
> Immagini: q183_post0.png

**Spiegazione:** 266/951 Q183 · June 30, 2026 267/951

---

## Domanda 184
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the file shares shown in the following table. You have the on-premises file shares shown in the following table. You create an Azure file sync group named Sync1 and perform the following actions: Add share1 as the cloud endpoint for Sync1. Add data1 as a server endpoint for Sync1. Register Server1 and Server2 to Sync1. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 268/951

**Risposta corretta:** You can add share3 as an additional cloud endpoint for Sync1. -> No | You can add data2 as an additional server endpoint for Sync1. -> Yes | You can add data3 as an additional server endpoint for Sync1. -> No
> Immagini: q184_post0.png

**Spiegazione:** Box 1: No - A sync group must contain one cloud endpoint, which represents an Azure file share and one or more server endpoints. Box 2: Yes - Data2 is located on Server2 which is registered to Sync1. Box 3: No - Data3 is located on Server3 which is not registered to Sync1. Reference: https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide? tabs=azure-portal%2Cproactive-portal#create-a-sync-group-and-a- cloud-endpoint Q184 · June 30, 2026 269/951

---

## Domanda 185
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains the resources shown in the following table: You plan to configure Azure Backup reports for Vault1. You are configuring the Diagnostics settings for the AzureBackupReports log. Which storage accounts and which Log Analytics workspaces can you use for the Azure Backup reports of Vault1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 270/951

**Risposta corretta:** Storage accounts -> storage1, storage2, and storage3 | Log Analytics workspaces -> Analytics3 only
> Immagini: q185_post0.png

**Spiegazione:** Box 1: storage1, storage2, and storage3 The location and subscription where this Log Analytics workspace can be created is independent of the location and subscription where your vaults exist. Box 2: Analytics3 - Vault1 and Analytics3 are both in West Europe. Reference: https://docs.microsoft.com/en-us/azure/backup/backup-azure-configure-reports Q185 · June 30, 2026 271/951

---

## Domanda 186
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the storage accounts shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can create a premium file share in -> contoso104 only | You can use the Archive access tier in -> contoso101 or contoso103 only
> Immagini: q186_post0.png

**Spiegazione:** 272/951 Q186 · June 30, 2026 273/951

---

## Domanda 187
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1. In Subscription1, you create an Azure file share named share1. You create a shared access signature (SAS) named SAS1 as shown in the following exhibit: To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 274/951

**Risposta corretta:** If on September 2, 2018, you run Microsoft Azure Storage Explorer on a computer that has an IP address of 193.77.134.1, and you use SAS1 to connect to the storage account, you [answer choice]. -> will have no access | If on September 10, 2018, you run the net use command on a computer that has an IP address of 193.77.134.50, and you use SAS1 as the password to connect to share1, you [answer choice]. -> will have no access
> Immagini: q187_post0.png

**Spiegazione:** Q187 · June 30, 2026 275/951

---

## Domanda 188
*Tipo: multiple_choice · fonte: text_layer*

You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2. VM2 is backed up to RSV1.You need to back up VM2 to RSV2.What should you do first?

- **A.** From the RSV1 blade, click Backup items and stop the VM2 backup **← CORRETTA**
- **B.** From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup
- **C.** From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault
- **D.** From the RSV1 blade, click Backup Jobs and export the VM2 job

**Risposta corretta:** A

**Spiegazione:** To back up an Azure virtual machine (VM2) to a different Recovery Services vault (RSV2), you must first stop the existing backup of VM2 in the current Recovery Services vault (RSV1). Virtual machines can only be associated with one vault at a time, and you cannot back up the same VM to two different vaults simultaneously. Therefore, you need to disassociate the VM from the current vault by stopping its backup, after which you can configure and start the backup in the new vault (RSV2). Q188 · June 30, 2026 276/951

---

## Domanda 189
*Tipo: multiple_choice · fonte: text_layer*

You have a general-purpose v1 Azure Storage account named storage1 that uses locally-redundant storage (LRS). You need to ensure that the data in the storage account is protected if a zone fails. The solution must minimize costs and administrative effort. What should you do first?

- **A.** Create a new storage account.
- **B.** Configure object replication rules.
- **C.** Upgrade the account to general-purpose v2. **← CORRETTA**
- **D.** Modify the Replication setting of storage1.

**Risposta corretta:** C

**Spiegazione:** To ensure data in the storage account is protected if a zone fails while minimizing costs and administrative effort, the first step should be to upgrade the account to general-purpose v2. Only general-purpose v2 accounts support Zone-Redundant Storage (ZRS), which distributes data across multiple zones to ensure resiliency in case of a zone failure. This upgrade is necessary because general-purpose v1 accounts do not support ZRS. Q189 · June 30, 2026 277/951

---

## Domanda 190
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the storage accounts shown in the following table. You plan to manage the data stored in the accounts by using lifecycle management rules. To which storage accounts can you apply lifecycle management rules?

- **A.** storage1 only
- **B.** storage1 and storage2 only
- **C.** storage3 and storage4 only
- **D.** storage1, storage2, and storage3 only **← CORRETTA**
- **E.** storage1, storage2, storage3, and storage4

**Risposta corretta:** D
> Esibito: q190_pre0.png

**Spiegazione:** Lifecycle management rules in Azure are supported for certain types of storage accounts. These include general-purpose v2 (GPv2) accounts, Blob storage accounts, and premium block blob storage accounts. Therefore, lifecycle management rules can be applied to storage1, storage2, and storage3, as they are of the types StorageV2, BlobStorage, and BlockBlobStorage respectively. However, lifecycle management rules do not support FileStorage account types, so storage4 is not included. Thus, the correct options would be storage1, storage2, and storage3 only. 278/951 Q190 · June 30, 2026

---

## Domanda 191
*Tipo: multiple_choice · fonte: text_layer*

You create an Azure Storage account named contosostorage. You plan to create a file share named data. Users need to map a drive to the data file share from home computers that run Windows 10. Which outbound port should you open between the home computers and the data file share?

- **A.** 80
- **B.** 443
- **C.** 445 **← CORRETTA**
- **D.** 3389

**Risposta corretta:** C

**Spiegazione:** To map a drive to an Azure file share from home computers that run Windows 10, the Server Message Block (SMB) protocol is required. The SMB protocol uses TCP port 445 for file sharing over the network. Therefore, outbound port 445 should be opened between the home computers and the data file share to ensure the connection can be established. Q191 · June 30, 2026 279/951

---

## Domanda 192
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** Azure File Storage **← CORRETTA**
- **B.** an Azure Cosmos DB database
- **C.** Azure Data Factory
- **D.** Azure SQL Database

**Risposta corretta:** A

**Spiegazione:** The Azure Import/Export service enables the secure import of large amounts of data into Azure by shipping disk drives to an Azure datacenter. The supported destinations for this service are Azure Blob storage and Azure File Storage. Hence, among the provided options, Azure File Storage is the correct destination for the imported data. Q192 · June 30, 2026 280/951

---

## Domanda 193
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains an Azure Storage account named storageaccount1. You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections. 281/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point 282/951

**Risposta corretta:** A server that has a public IP address of 131.107.103.10 can access storageaccount1 -> Yes | Individual blobs in storageaccount1 can be set to use the archive tier -> Yes | Global administrations in Azure Active Directory (Azure AD) can access a file share hosted in storageaccount1 by using their Azure AD credentials -> No
> Immagini: q193_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts?tabs=json Q193 · June 30, 2026 283/951

---

## Domanda 194
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. You have the devices shown in the following table. From which devices can you use AzCopy to copy data to storage1?

- **A.** Device 1 only
- **B.** Device1, Device2 and Device3 **← CORRETTA**
- **C.** Device1 and Device2 only
- **D.** Device1 and Device3 only

**Risposta corretta:** B
> Esibito: q194_pre0.png

**Spiegazione:** AzCopy is a command-line utility designed for copying data to and from Microsoft Azure storage. It supports Windows, Linux, and macOS operating systems. Therefore, Device1, Device2, and Device3 are all capable of using AzCopy to copy data to the Azure storage account named storage1. Q194 · June 30, 2026 284/951

---

## Domanda 195
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Storage account named storage1 that contains a blob container named container1. You need to prevent new content added to container1 from being modified for one year. What should you configure?

- **A.** the access tier
- **B.** an access policy **← CORRETTA**
- **C.** the Access control (IAM) settings
- **D.** the access level

**Risposta corretta:** B

**Spiegazione:** To prevent new content added to container1 from being modified for one year, you need to configure a time-based retention policy. This can be achieved by setting up an access policy that specifies the retention interval. Once configured, the data will be in an immutable state, meaning it cannot be modified or deleted during the specified retention period. Q195 · June 30, 2026 285/951

---

## Domanda 196
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure Storage account named storage1 that contains a blob container. The blob container has a default access tier of Hot. Storage1 contains a container named conainer1. You create lifecycle management rules in storage1 as shown in the following table. You perform the actions shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** On October 10, you can read Dep1File1.docx. -> No | On October 10, you can read File2.docx. -> Yes | On October 10, you can read File3.docx. -> Yes
> Immagini: q196_post0.png

**Spiegazione:** 286/951 Q196 · June 30, 2026 287/951

---

## Domanda 197
*Tipo: multiple_choice · fonte: text_layer*

You are configuring Azure Active Directory (Azure AD) authentication for an Azure Storage account named storage1. You need to ensure that the members of a group named Group1 can upload files by using the Azure portal. The solution must use the principle of least privilege. Which two roles should you configure for storage1? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Storage Account Contributor
- **B.** Storage Blob Data Contributor **← CORRETTA**
- **C.** Reader
- **D.** Contributor **← CORRETTA**
- **E.** Storage Blob Data Reader

**Risposta corretta:** B, D

**Spiegazione:** To ensure that the members of Group1 can upload files to a storage account using the Azure portal, while adhering to the principle of least privilege, two roles should be configured. First, the 'Storage Blob Data Contributor' role allows for essential operations on blob data such as read, write, and delete, which are necessary for uploading files. Second, the 'Reader' role gives the user read access to see the storage account and its properties but does not allow any modifications. This role is needed to navigate the portal and access the storage resources. Additionally, since the task requires uploading files and managing data actions, these roles together provide the required permissions without granting unnecessary access. Q197 · June 30, 2026 288/951

---

## Domanda 198
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Storage account named storage1 that stores images. You need to create a new storage account and replicate the images in storage1 to the new account by using object replication. How should you configure the new account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Account type -> StorageV2 or BlobStorage only | Object type to create in the new account -> Container
> Immagini: q198_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/storage/blobs/object-replication-overview 289/951 Q198 · June 30, 2026 290/951

---

## Domanda 199
*Tipo: multiple_choice · fonte: text_layer*

You have an on-premises server that contains a folder named D:\Folder1. You need to copy the contents of D:\Folder1 to the public container in an Azure Storage account named contosodata. Which command should you run?

- **A.** https://contosodata.blob.core.windows.net/public
- **B.** azcopy sync D:\folder1 https://contosodata.blob.core.windows.net/public --snapshot
- **C.** azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public -- recursive **← CORRETTA**
- **D.** az storage blob copy start-batch D:\Folder1 https://contosodata.blob.core.windows.net/public

**Risposta corretta:** C

**Spiegazione:** To copy the contents of a local folder to an Azure Storage container, you should use the 'azcopy copy' command. This command is designed to copy data from a source to a destination, and the '-- recursive' flag is necessary to ensure that all contents within the directory, including subdirectories, are copied. The correct format for the command includes specifying the source path and the destination URL. In this case, the appropriate command is 'azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public --recursive'. Q199 · June 30, 2026 291/951

---

## Domanda 200
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. In the Azure portal, you plan to create a storage account named storage1 that will have the following settings: Performance: Standard Replication: Zone-redundant storage (ZRS) Access tier (default): Cool Hierarchical namespace: Disabled You need to ensure that you can set Account kind for storage1 to BlockBlobStorage. Which setting should you modify first?

- **A.** Performance **← CORRETTA**
- **B.** Replication
- **C.** Access tier (default)
- **D.** Hierarchical namespace

**Risposta corretta:** A

**Spiegazione:** To set the Account kind for a storage account to BlockBlobStorage, the Performance setting must be changed to Premium. BlockBlobStorage is a specialized account type that is only available in the Premium performance tier, which is optimized for scenarios requiring low latency and high transaction rates. Therefore, modifying the Performance setting to Premium will allow you to select BlockBlobStorage as the account kind. Q200 · June 30, 2026 292/951

---

## Domanda 201
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains the storage accounts shown in the following table. You plan to use AzCopy to copy a blob from container1 directly to share1. You need to identify which authentication method to use when you use AzCopy. What should you identify for each account? To answer, drag the appropriate authentication methods to the correct accounts. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.

**Risposta corretta:** storage1 -> A shared access signature (SAS) token | storage2 -> A shared access signature (SAS) token
> Immagini: q201_post0.png

**Spiegazione:** Box 1: A shared access signature (SAS) token. You can provide authorization credentials by using Azure Active Directory (AD), or by using a Shared Access Signature (SAS) token. 293/951 For Blob storage you can use Azure AD & SAS. Note: In the current release, if you plan to copy blobs between storage accounts, you'll have to append a SAS token to each source URL. You can omit the SAS token only from the destination URL. Box 2: A shared access signature (SAS) token. For File storage you can only use SAS. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10 Q201 · June 30, 2026 294/951

---

## Domanda 202
*Tipo: multiple_choice · fonte: text_layer*

You create an Azure Storage account. You plan to add 10 blob containers to the storage account. For one of the containers, you need to use a different key to encrypt data at rest. What should you do before you create the container?

- **A.** Generate a shared access signature (SAS).
- **B.** Modify the minimum TLS version.
- **C.** Rotate the access keys.
- **D.** Create an encryption scope. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To use a different key to encrypt data at rest for one specific container in an Azure Storage account, you should create an encryption scope before creating the container. An encryption scope is a configuration that establishes the encryption settings for a storage container, allowing you to specify a unique key for encrypting data. By setting up an encryption scope, you can manage encryption keys for individual containers or blobs, ensuring secure and separate encryption within the same storage account. Q202 · June 30, 2026 295/951

---

## Domanda 203
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table. On June 1, you store two blobs in storage1 as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** On June 6, File1 will be stored in the Cool access tier. -> No | On June 1, File2 will be stored in the Cool access tier. -> No | On June 16, File2 will be stored in the Archive access tier. -> No
> Immagini: q203_post0.png

**Spiegazione:** 296/951 Q203 · June 30, 2026 297/951

---

## Domanda 204
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription. You plan to deploy a storage account named storage1 by using the following Azure Resource Manager (ARM) template. 298/951 For each of the following statements, select Yes if the statement is hue. Otherwise, select No. NOTE: Each correct selection is worth one point. 299/951

**Risposta corretta:** Changes made to the data in storage1 can be rolled back after seven days. -> No | Only users located in the East US Azure region can connect to storage1. -> No | Three copies of storage1 will be maintained in the East US Azure region. -> Yes
> Immagini: q204_post0.png

**Spiegazione:** Q204 · June 30, 2026 300/951

---

## Domanda 205
*Tipo: multiple_choice · fonte: text_layer*

You have an on-premises server that contains a folder named D:\Folder1. You need to copy the contents of D:\Folder1 to the public container in an Azure Storage account named contosodata. Which command should you run?

- **A.** az storage blob copy start D:\Folder1 https://contosodata.blob.core.windows.net/public
- **B.** azcopy sync D:\folder1 https://contosodata.blob.core.windows.net/public --snapshot
- **C.** azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public -- recursive **← CORRETTA**
- **D.** az storage blob copy start-batch D:\Folder1 https://contosodata.blob.core.windows.net/public

**Risposta corretta:** C

**Spiegazione:** To copy the contents of a local folder (D:\Folder1) to a public container in an Azure Storage account, the correct command is 'azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public -- recursive'. The 'azcopy copy' command is specifically designed to copy files and directories, and the '- -recursive' flag ensures that all files within the folder, including subfolders, are copied. Q205 · June 30, 2026 301/951

---

## Domanda 206
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1. You need to create a lifecycle management rule for storage1 that will automatically move the blobs in container1 to the lowest-cost tier after 90 days. How should you complete the rule? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 302/951

**Risposta corretta:** "baseBlob" (box 1) -> "tierToArchive":{ | "filters" (box 2) -> "prefixMatch":[
> Immagini: q206_post0.png

**Spiegazione:** Q206 · June 30, 2026 303/951

---

## Domanda 207
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains a virtual machine named VM1. You need to back up VM1. The solution must ensure that backups are stored across three availability zones in the primary region. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Create a Recovery Services vault. -> 2. Set Replication to Zone-redundant storage (ZRS). -> 3. For VM1, create a backup policy and configure the backup.
> Immagini: q207_post0.png

**Spiegazione:** Q207 · June 30, 2026 304/951

---

## Domanda 208
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** an Azure Cosmos DB database
- **B.** Azure File Storage **← CORRETTA**
- **C.** Azure SQL Database
- **D.** a virtual machine

**Risposta corretta:** B

**Spiegazione:** The Azure Import/Export service is designed to import large amounts of data to Azure Blob Storage and Azure Files by shipping hard drives directly to an Azure datacenter. This service is not compatible with Azure Cosmos DB, Azure SQL Database, or virtual machines as destinations for the imported data. Therefore, the correct option is Azure File Storage. Q208 · June 30, 2026 305/951

---

## Domanda 209
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to perform the tasks shown in the following table. Which tasks can you perform by using Azure Storage Explorer?

- **A.** Task1 and Task3 only
- **B.** Task1, Task2, and Task3 only
- **C.** Task1, Task3, and Task4 only
- **D.** Task2, Task3, and Task4 only **← CORRETTA**
- **E.** Task1, Task2, Task3, and Task4

**Risposta corretta:** D
> Esibito: q209_pre0.png, q209_pre1.png

**Spiegazione:** Azure Storage Explorer is a tool used for managing existing Azure storage accounts and their contents. This tool allows you to upload data to blob containers, create and manage file shares, and add data to storage tables. However, it does not include the capability to create a new storage account. Therefore, tasks that can be successfully performed using Azure Storage Explorer are 306/951 uploading an append blob to a container, creating a file share in an existing storage account, and adding data to an existing storage table. Creating a new storage account would require using other tools or the Azure Portal. Thus, task 2, task 3, and task 4 can be performed using Azure Storage Explorer. Q209 · June 30, 2026 307/951

---

## Domanda 210
*Tipo: hotspot · fonte: manual_vision*

You have an Azure AD user named User1 and a read-access geo-redundant storage (RA-GRS) account named contoso2023. You need to meet the following requirements: User1 must be able to write blob data to contoso2023. The contoso2023 account must fail over to its secondary endpoint. Which two settings should you configure? To answer, select the appropriate settings in the answer area. NOTE: Each correct selection is worth one point. 308/951 309/951

**Risposta corretta:** Setting 1 -> Access Control (IAM) | Setting 2 -> Geo-replication
> Immagini: q210_post0.png

**Spiegazione:** 310/951 311/951 Q210 · June 30, 2026

---

## Domanda 211
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. You plan to create a blob container named container1. You need to use customer-managed key encryption for container1. Which key should you use?

- **A.** an EC key that uses the P-384 curve only
- **B.** an EC key that uses the P-521 curve only
- **C.** an EC key that uses the P-384 curve or P-521 curve only
- **D.** an RSA key with a key size of 4096 only
- **E.** an RSA key type with a key size of 2048, 3072, or 4096 only **← CORRETTA**

**Risposta corretta:** E

**Spiegazione:** To use customer-managed key encryption for a blob container in Azure, you need to use RSA keys. Azure storage encryption supports RSA and RSA-HSM keys of sizes 2048, 3072, and 4096. Therefore, an RSA key type with a key size of 2048, 3072, or 4096 is the correct choice. Q211 · June 30, 2026 312/951

---

## Domanda 212
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a user named User1 and a storage account named storage1. The storage1 account contains the resources shown in the following table. User1 is assigned the following roles for storage1: Storage Blob Data Reader Storage Table Data Contributor Storage File Data SMB Share Contributor For storage1, you create a shared access signature (SAS) named SAS1 that has the settings shown in the following exhibit. (Click the Exhibit tab.) 313/951 To which resources can User1 write by using SAS1 and key1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 314/951

**Risposta corretta:** key1 -> Table1, folder1, and container1 | SAS1 -> Table1 only
> Immagini: q212_post0.png

**Spiegazione:** Q212 · June 30, 2026 315/951

---

## Domanda 213
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the storage account shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic NOTE: Each correct selection is worth one point. 316/951

**Risposta corretta:** The maximum number of additional stored access policies that you can create for container1 is [answer choice]. -> 3 | The maximum number of additional immutable blob storage policies that you can create for container1 is [answer choice]. -> 1
> Immagini: q213_post0.png

**Spiegazione:** Q213 · June 30, 2026 317/951

---

## Domanda 214
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** Azure Blob Storage **← CORRETTA**
- **B.** Azure Data Lake Store
- **C.** Azure SQL Database
- **D.** a virtual machine

**Risposta corretta:** A

**Spiegazione:** Azure Import/Export service is designed for transferring large amounts of data to and from Azure Blob Storage and Azure Files by shipping disk drives to an Azure datacenter. Therefore, you can use Azure Blob Storage as the destination for the imported data. Q214 · June 30, 2026 318/951

---

## Domanda 215
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table. On June 1, you store a blob named File1 in the Hot access tier of storage1. What is the state of File1 on June 7?

- **A.** stored in the Cool access tier
- **B.** stored in the Archive access tier
- **C.** stored in the Hot access tier
- **D.** deleted **← CORRETTA**

**Risposta corretta:** D
> Esibito: q215_pre0.png

**Spiegazione:** Based on the lifecycle management rules provided, all actions are triggered if the base blobs are last modified more than 5 days ago. When multiple rules apply to a blob, Azure lifecycle management applies the least expensive action. In this case, deleting the blob is less expensive than moving it to either cool or archive storage. Therefore, the blob would be deleted on June 7. Q215 · June 30, 2026 319/951

---

## Domanda 216
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the storage accounts shown in the following table. You need to identify which storage accounts support lifecycle management, and which storage accounts support moving data to the Archive access tier. Which storage accounts should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Lifecycle management -> storage1, storage2, and storage3 | The Archive access tier -> storage2 only
> Immagini: q216_post0.png

**Spiegazione:** 320/951 Q216 · June 30, 2026 321/951

---

## Domanda 217
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** an Azure Cosmos DB database
- **B.** Azure Data Lake Store
- **C.** Azure Blob storage **← CORRETTA**
- **D.** Azure Data Factory

**Risposta corretta:** C

**Spiegazione:** The best option for transferring 5 TB of data to an Azure subscription through an Azure Import/Export job is Azure Blob storage. Azure Import/Export service allows you to securely import large amounts of data by shipping disk drives to an Azure datacenter, and data can be imported directly into Azure Blob storage or Azure Files. Therefore, among the given options, Azure Blob storage is the suitable destination for the imported data. Q217 · June 30, 2026 322/951

---

## Domanda 218
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1. You create a blob lifecycle rule named rule1. You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from contained to the Cool access tier. How should you complete the rule? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 323/951

**Risposta corretta:** "tierToCool" (box 1) -> "daysAfterModificationGreaterThan" | "blobTypes" (box 2) -> "Blockblob"
> Immagini: q218_post0.png

**Spiegazione:** 324/951 Q218 · June 30, 2026 325/951

---

## Domanda 219
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** an Azure Cosmos DB database
- **B.** Azure Blob Storage **← CORRETTA**
- **C.** Azure SQL Database
- **D.** the Azure File Sync Storage Sync Service

**Risposta corretta:** B

**Spiegazione:** Azure Import/Export service is specifically designed to import large amounts of data to Azure Blob Storage. This service facilitates the secure transfer of data by allowing users to ship disk drives directly to an Azure datacenter where data is uploaded to Azure Blob Storage. Therefore, the correct destination of the imported data in this context is Azure Blob Storage. Q219 · June 30, 2026 326/951

---

## Domanda 220
*Tipo: multiple_choice · fonte: text_layer*

You plan to create an Azure Storage account named storage1 that will contain a file share named share1. You need to ensure that share1 can support SMB Multichannel. The solution must minimize costs. How should you configure storage?

- **A.** Premium performance with locally-redundant storage (LRS) **← CORRETTA**
- **B.** Standard performance with zone-redundant storage (ZRS)
- **C.** Premium performance with geo-redundant storage (GRS)
- **D.** Standard performance with locally-redundant storage (LRS)

**Risposta corretta:** A

**Spiegazione:** To support SMB Multichannel in Azure, you need to use premium file shares. Among the redundancy options, locally-redundant storage (LRS) and zone-redundant storage (ZRS) are supported. Since the requirement is to minimize costs, locally-redundant storage (LRS) is the most economical choice while still providing the necessary performance for SMB Multichannel. Q220 · June 30, 2026 327/951

---

## Domanda 221
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** Azure Data Lake Store
- **B.** Azure File Storage **← CORRETTA**
- **C.** Azure SQL Database
- **D.** the Azure File Sync Storage Sync Service

**Risposta corretta:** B

**Spiegazione:** Azure Import/Export service allows you to transfer large amounts of data to Azure by shipping hard drives to an Azure data center. The supported destinations for the imported data include Azure Blob Storage and Azure File Storage. The other options provided, such as Azure Data Lake Store, Azure SQL Database, and the Azure File Sync Storage Sync Service, are not directly supported as destinations for the Azure Import/Export job. Therefore, Azure File Storage is the correct destination for the imported data. Q221 · June 30, 2026 328/951

---

## Domanda 222
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. You plan to use conditions when assigning role-based access control (RBAC) roles to storage1. Which storage1 services support conditions when assigning roles?

- **A.** containers only
- **B.** file shares only
- **C.** tables only
- **D.** queues only
- **E.** containers and queues only **← CORRETTA**
- **F.** files shares and tables only

**Risposta corretta:** E

**Spiegazione:** Conditions for role-based access control (RBAC) in Azure can be applied to Blob storage (containers) and Queue storage services. These services support the use of Azure Active Directory (Azure AD) authentication, which is necessary for implementing RBAC with conditions. File shares rely on the SMB protocol and do not use Azure AD for authentication, and tables have their own authentication mechanisms which do not support conditions in the same way. Q222 · June 30, 2026 329/951

---

## Domanda 223
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resource groups shown in the following table. The subscription contains the virtual networks shown in the following table. You plan to deploy the Azure Kubernetes Service (AKS) clusters shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 330/951

**Risposta corretta:** You can deploy AKS1 to VNet2. -> No | You can deploy AKS2 to VNet1. -> Yes | You can deploy AKS3 to VNet3. -> Yes
> Immagini: q223_post0.png

**Spiegazione:** Q223 · June 30, 2026 331/951

---

## Domanda 224
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1. Solution: You assign the Storage Account Encryption Scope Contributor Role to User1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q224 · June 30, 2026 332/951

---

## Domanda 225
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that has offices in the East US and West US Azure regions. You plan to create the storage account shown in the following exhibit. 333/951 334/951 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** To minimize the network costs of accessing adatum22, modify the [answer choice] setting. -> Default routing tier | After adatum22 is created, you can modify the [answer choice] setting. -> Encryption type
> Immagini: q225_post0.png

**Spiegazione:** 335/951 Q225 · June 30, 2026 336/951

---

## Domanda 226
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You plan to deploy a new storage account. You need to configure encryption for the account. The solution must meet the following requirements: Use a customer-managed key stored in a key vault. Use the maximum supported bit length. Which type of key and which bit length should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Key -> RSA | Bit length -> 4096
> Immagini: q226_post0.png

**Spiegazione:** 337/951 Q226 · June 30, 2026 338/951

---

## Domanda 227
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Storage account that contains 5,000 blobs accessed by multiple users. You need to ensure that the users can view only specific blobs based on blob index tags. What should you include in the solution?

- **A.** a role assignment condition **← CORRETTA**
- **B.** a stored access policy
- **C.** just-in-time (JIT) VM access
- **D.** a shared access signature (SAS)

**Risposta corretta:** A

**Spiegazione:** To ensure that users can view only specific blobs based on blob index tags, you should use a role assignment condition. A role assignment condition provides more fine-grained access control by requiring specific attributes, such as blob index tags, to be met before granting access. This allows you to control access at a very granular level, ensuring users can only view blobs that meet the specified criteria. Q227 · June 30, 2026 339/951

---

## Domanda 228
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Storage account named storage1. For storage1, you create an encryption scope named Scope1. Which storage types can you encrypt by using Scope?

- **A.** file shares only
- **B.** containers only
- **C.** file shares and containers only
- **D.** containers and tables only
- **E.** file shares, containers, and tables only
- **F.** file shares, containers, tables, and queues **← CORRETTA**

**Risposta corretta:** F

**Spiegazione:** Encryption scopes in Azure Storage are used to manage the encryption of data at rest within the storage account. They apply to file shares, containers, tables, and queues. This allows granular control over how data is encrypted across these different types of storage, providing flexibility and enhanced security measures for various data storage scenarios within Azure. Therefore, the correct answer is that encryption scopes can be used for file shares, containers, tables, and queues. Q228 · June 30, 2026 340/951

---

## Domanda 229
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You plan to create a role definition to meet the following requirements: Users must be able to view the configuration data of a storage account. Users must be able to perform all actions on a virtual network. The solution must use the principle of least privilege. What should you include in the role definition for each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Perform all actions on a virtual network -> "Microsoft.Network/virtualNetworks/*" | View the configuration data of a storage account -> "Microsoft.Storage/StorageAccounts/read"
> Immagini: q229_post0.png

**Spiegazione:** 341/951 Q229 · June 30, 2026 342/951

---

## Domanda 230
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?

- **A.** Azure Data Factory
- **B.** the Azure File Sync Storage Sync Service
- **C.** Azure File Storage **← CORRETTA**
- **D.** Azure SQL Database

**Risposta corretta:** C

**Spiegazione:** To transfer data to an Azure subscription using an Azure Import/Export job, the destination can be Azure Blob Storage or Azure File Storage. Azure File Storage, in particular, is designed to store large volumes of unstructured data, making it an appropriate choice for importing 5 TB of data. Q230 · June 30, 2026 343/951

---

## Domanda 231
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a virtual machine named VM1. To VM1, you plan to add a 1-TB data disk that meets the following requirements: Provides data resiliency in the event of a datacenter outage. Provides the lowest latency and the highest performance. Ensures that no data loss occurs if a host fails. You need to recommend which type of storage and host caching to configure for the new data disk.

**Risposta corretta:** Storage type -> Premium SSD that uses zone-redundant storage (ZRS) | Host caching -> Read-only
> Immagini: q231_post0.png

**Spiegazione:** 344/951 Q231 · June 30, 2026 345/951

---

## Domanda 232
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine named VM1 and an Azure key vault named Vault1. On VM1, you plan to configure Azure Disk Encryption to use a key encryption key (KEK). You need to prepare Vault1 for Azure Disk Encryption. Which two actions should you perform on Vault1? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Select Azure Virtual machines for deployment.
- **B.** Create a new key. **← CORRETTA**
- **C.** Create a new secret.
- **D.** Configure a key rotation policy.
- **E.** Select Azure Disk Encryption for volume encryption. **← CORRETTA**

**Risposta corretta:** B, E

**Spiegazione:** To prepare Vault1 for Azure Disk Encryption, two actions are necessary. First, you need to create a new key in Vault1, as this key will be used as the key encryption key (KEK) for encrypting the virtual machine's disks. Second, you should configure the key vault to enable Azure Disk Encryption for volume encryption. This ensures that the key vault is set up to work with Azure VMs and their disks, allowing the encryption process to utilize the KEK stored in the key vault. Q232 · June 30, 2026 346/951

---

## Domanda 233
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1. You need to configure encryption for VM1. The solution must meet the following requirements: Store and use the encryption key in KV1. Maintain encryption if VM1 is downloaded from Azure. Encrypt both the operating system disk and the data disks. Which encryption method should you use?

- **A.** customer-managed keys
- **B.** Confidential disk encryption
- **C.** Azure Disk Encryption **← CORRETTA**
- **D.** encryption at host

**Risposta corretta:** C

**Spiegazione:** Azure Disk Encryption (ADE) is the most suitable method for configuring encryption for an Azure virtual machine (VM) while meeting the requirements. ADE encrypts both the operating system disk and data disks using BitLocker for Windows VMs and DM-Crypt for Linux VMs. Encryption keys used by ADE can be stored in Azure Key Vault, such as KV1, which ensures that encryption is maintained even if the VM is downloaded from Azure. This solution fully aligns with the specified needs of encrypting both the OS and data disks and storing the encryption key in KV1. Q233 · June 30, 2026 347/951

---

## Domanda 234
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a storage account named storage1. You need to configure a shared access signature (SAS) to ensure that users can only download blobs securely by name. Which two settings should you configure? To answer, select the appropriate settings in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Allowed resource types -> Object | Allowed permissions -> Read
> Nota: Allowed services: Blob risulta gia' selezionato nell'esibito
> Immagini: q234_post0.png

**Spiegazione:** 348/951 Q234 · June 30, 2026

---

## Domanda 235
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1. You need to configure access to container1. The solution must meet the following requirements: ONLY allow read access. Allow both HTTP and HTTPS protocols. Apply access permissions to all the content in the container. What should you use?

- **A.** an access policy
- **B.** a shared access signature (SAS) **← CORRETTA**
- **C.** Azure Content Delivery Network (CDN)
- **D.** access keys

**Risposta corretta:** B

**Spiegazione:** To configure access to container1 in an Azure storage account and meet the stated requirements, you should use a shared access signature (SAS). A shared access signature allows you to provide delegated access to resources in your storage account with specified permissions, such as read-only access. Additionally, it enables control over the allowed protocols (both HTTP and HTTPS) and the application of these permissions to all content within the container. Q235 · June 30, 2026 349/951

---

## Domanda 236
*Tipo: multiple_choice · fonte: text_layer*

You need to create an Azure Storage account named storage1. The solution must meet the following requirements: Support Azure Data Lake Storage. Minimize costs for infrequently accessed data. Automatically replicate data to a secondary Azure region. Which three options should you configure for storage1? Each correct answer presents part of the solution. NOTE: Each correct answer is worth one point.

- **A.** zone-redundant storage (ZRS)
- **B.** the Cool access tire **← CORRETTA**
- **C.** geo-redundant storage (GRS) **← CORRETTA**
- **D.** the Hot access tier
- **E.** hierarchical namespace **← CORRETTA**

**Risposta corretta:** B, C, E

**Spiegazione:** To create an Azure Storage account that supports Azure Data Lake Storage, minimizes costs for infrequently accessed data, and automatically replicates data to a secondary Azure region, you need to configure it with the Cool access tier, geo-redundant storage, and hierarchical namespace. The Cool access tier is optimized for lower storage costs for infrequently accessed data. Geo-redundant storage ensures data is replicated to a secondary Azure region, meeting the requirement for automatic replication. The hierarchical namespace is necessary for supporting Azure Data Lake Storage, which allows for a file system interface. 350/951 Q236 · June 30, 2026 351/951

---

## Domanda 237
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure Storage account named storage1 that contains two containers named container1 and container2. Blob versioning is enabled for both containers. You periodically take blob snapshots of critical blobs. You create the following lifecycle management policy. 352/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 353/951

**Risposta corretta:** A blob snapshot automatically moves to the Cool access tier after 15 days. -> Yes | A blob version in container2 automatically moves to the Archive access tier after 30 days. -> No | A rehydrated version automatically moves to the Archive access tier after 30 days. -> No
> Immagini: q237_post0.png

**Spiegazione:** Q237 · June 30, 2026 354/951

---

## Domanda 238
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the storage accounts shown in the following table. Which storage account can be converted to zone-redundant storage (ZRS) replication?

- **A.** storage1
- **B.** storage2 **← CORRETTA**
- **C.** storage3
- **D.** storage4

**Risposta corretta:** B
> Esibito: q238_pre0.png

**Spiegazione:** To convert to zone-redundant storage (ZRS) replication, the storage account must be of the types: Standard general-purpose v2 (StorageV2), Premium block blobs (BlockBlobStorage), or Premium file shares (FileStorage). Additionally, the replication should initially be locally-redundant storage (LRS) or geographically-redundant storage (GRS). In this case, storage2 fits the requirements as it is a Standard general-purpose v2 (StorageV2) account with LRS replication. 355/951 Q238 · June 30, 2026

---

## Domanda 239
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the devices shown in the following table. On which devices can you install Azure Storage Explorer?

- **A.** Device1 only
- **B.** Device1 and Device2 only
- **C.** Device1 and Device3 only
- **D.** Device1, Device2, and Device3 only **← CORRETTA**
- **E.** Device1, Device3, and Device4 only

**Risposta corretta:** D
> Esibito: q239_pre0.png

**Spiegazione:** Azure Storage Explorer can be installed on Windows, macOS, and Linux platforms. Based on the given devices, Device1 (Windows), Device2 (Ubuntu Linux), and Device3 (macOS) all support Azure Storage Explorer. Therefore, the correct devices are Device1, Device2, and Device3. Q239 · June 30, 2026 356/951

---

## Domanda 240
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1. Solution: You assign the Storage Account Key Operator Service Role to User1. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Q240 · June 30, 2026 357/951

---

## Domanda 241
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files. You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1. You need to ensure that only blobs whose names start with the word finance are stored daily as a CSV file in container1. How should you complete rule1? To answer, select the options in the answer area. NOTE: Each correct answer is worth one point. 358/951

**Risposta corretta:** "blobTypes" -> blockBlob | "prefixMatch" -> container1/finance
> Immagini: q241_post0.png

**Spiegazione:** 359/951 360/951 Q241 · June 30, 2026 361/951

---

## Domanda 242
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blobs in a container named container1. You plan to share access to storage1. You need to generate a shared access signature (SAS). The solution must meet the following requirements: Ensure that the SAS can only be used to enumerate and download blobs stored in container1. Use the principle of least privilege. Which three settings should you enable? To answer, select the appropriate settings in the answer area.

**Risposta corretta:** Allowed services -> Blob | Allowed resource types -> Container | Allowed permissions -> Read, List
> Immagini: q242_post0.png

**Spiegazione:** 362/951 Q242 · June 30, 2026 363/951

---

## Domanda 243
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table. On June 1, you store two blobs in storage1 as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** On June 6, File1 will be stored in the Cool access tier. -> No | On June 7, File2 will be stored in the Cool access tier. -> Yes | On June 16, File2 will be stored in the Archive access tier. -> No
> Immagini: q243_post0.png

**Spiegazione:** 364/951 Q243 · June 30, 2026 365/951

---

## Domanda 244
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure Storage account named contoso2024 that contains the resources shown in the following table. You have users that have permissions for contoso2024 as shown in the following table. The contoso2024 account is configured as shown in the following exhibit. 366/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 can read File1. -> No | User2 can read File2. -> No | User3 can read File1 and File2. -> No
> Immagini: q244_post0.png

**Spiegazione:** 367/951 Q244 · June 30, 2026 368/951

---

## Domanda 245
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table. You create the Azure Files shares shown in the following table. You configure identity-based access for contoso2024 as shown in the following exhibit. 369/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 can access the content in share1. -> No | User2 can access the content in share2. -> Yes | User2 can access the content in share3. -> No
> Immagini: q245_post0.png

**Spiegazione:** Q245 · June 30, 2026 370/951

---

## Domanda 246
*Tipo: hotspot_yes_no · fonte: manual_vision*

Your network contains an on-premises Active Directory Domain Services (AD DS) domain. The domain contains the identities shown in the following table. You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups. You create an Azure Files share named share1 that has the roles shown in the following table. You have a Microsoft Entra tenant that contains a cloud-only user named User3. You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 371/951

**Risposta corretta:** User1 can access content in share1. -> Yes | User2 can access content in share1. -> Yes | User3 can access content in share1. -> No
> Immagini: q246_post0.png

**Spiegazione:** Q246 · June 30, 2026 372/951

---

## Domanda 247
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the storage accounts shown in the following table. Which storage account can be converted to zone-redundant storage (ZRS) replication?

- **A.** storage1 only **← CORRETTA**
- **B.** storage2 only
- **C.** storage3 only
- **D.** storage2 and storage3
- **E.** storage1, storage2, and storage3

**Risposta corretta:** A
> Esibito: q247_pre0.png

**Spiegazione:** Q247 · June 30, 2026 373/951

---

## Domanda 248
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1. Solution: You assign the Reader and Data Access role to User1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q248 · June 30, 2026 374/951

---

## Domanda 249
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1. You need to ensure that ContReg1 supports geo-replication. What should you do first for ContReg1?

- **A.** Enable Admin user.
- **B.** Add a scope map.
- **C.** Add an automation task.
- **D.** Create a cache rule.
- **E.** Upgrade the SKU. **← CORRETTA**

**Risposta corretta:** E

**Spiegazione:** Q249 · June 30, 2026 375/951

---

## Domanda 250
*Tipo: hotspot · fonte: manual_vision*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 376/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 377/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 378/951 Follow the principle of least privilege. Grant permissions at the required scope only. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You implement the planned changes for cont2. What is the maximum number of additional access policies you can create for cont2? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Stored access policies -> 2 | Immutable blob storage policies -> 1
> Immagini: q250_post0.png

**Spiegazione:** 379/951 Q250 · June 30, 2026 380/951

---

## Domanda 251
*Tipo: multiple_choice · fonte: text_layer*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 381/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 382/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 383/951 Follow the principle of least privilege. Grant permissions at the required scope only. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You need to configure encryption for the virtual machines. The solution must meet the technical requirements. Which virtual machines can you encrypt?

- **A.** VM1 and VM3
- **B.** VM4 and VM5
- **C.** VM2 and VM3 **← CORRETTA**
- **D.** VM2 and VM4

**Risposta corretta:** C
> Esibito: q251_pre0.png, q251_pre1.png, q251_pre2.png, q251_pre3.png, q251_pre4.png, q251_pre5.png, q251_pre6.png, q251_pre7.png

**Spiegazione:** Q251 · June 30, 2026 384/951

---

## Domanda 252
*Tipo: multiple_choice · fonte: text_layer*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 385/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 386/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 387/951 Follow the principle of least privilege. Grant permissions at the required scope only. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You need to implement the planned changes for the storage account content. Which containers and file shares can you use to organize the content?

- **A.** share1 only
- **B.** cont1 and share1 only
- **C.** share1 and share2 only
- **D.** cont1, share1, and share2 only **← CORRETTA**
- **E.** cont1, cont2, share1, and share2

**Risposta corretta:** D
> Esibito: q252_pre0.png, q252_pre1.png, q252_pre2.png, q252_pre3.png, q252_pre4.png, q252_pre5.png, q252_pre6.png, q252_pre7.png

**Spiegazione:** Q252 · June 30, 2026 388/951

---

## Domanda 253
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run az aks. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To deploy a YAML file to an Azure Kubernetes Service (AKS) cluster, you need to use the kubectl command. The az aks command in Azure CLI is used to manage AKS clusters, such as creating, updating, or deleting the clusters, but not for deploying resources into the clusters. The correct command to deploy a YAML file is kubectl apply -f .yaml. Q253 · June 30, 2026 389/951

---

## Domanda 254
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run the kubectl client. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To deploy a YAML file to an Azure Kubernetes Service (AKS) cluster, you would use the Kubernetes command-line client, kubectl. The command kubectl apply -f is specifically designed for this purpose, allowing you to apply configuration defined in a YAML file to your AKS cluster. Thus, using kubectl from the Azure CLI meets the goal of deploying a YAML file to AKS1. Q254 · June 30, 2026 390/951

---

## Domanda 255
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run azcopy. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To deploy a YAML file to an Azure Kubernetes Service (AKS) cluster, you use the 'kubectl' command line tool, not 'azcopy'. The correct command is 'kubectl apply -f .yaml'. This command applies the configuration specified in the YAML file to the AKS cluster. 'azcopy' is used for transferring data to and from Azure Storage, not for deploying resources to Kubernetes clusters. Q255 · June 30, 2026 391/951

---

## Domanda 256
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source. Does that meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The proposed solution involves creating an Azure storage account and configuring shared access signatures (SASs), which is unnecessary for the goal of monitoring error events in a VM's System event log. The correct method involves creating an Azure Log Analytics workspace and configuring the data settings, then installing the Microsoft Monitoring Agent on VM1. Azure Monitor can then be used to create an alert, specifying the Log Analytics workspace as the source, not a storage account. This approach leverages the appropriate tools for log collection and monitoring within the Azure ecosystem. Q256 · June 30, 2026 392/951

---

## Domanda 257
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1. Subscription1 contains the resources in the following table. VNet1 is in RG1. VNet2 is in RG2. There is no connectivity between VNet1 and VNet2. An administrator named Admin1 creates an Azure virtual machine named VM1 in RG1. VM1 uses a disk named Disk1 and connects to VNet1. Admin1 then installs a custom application in VM1. You need to move the custom application to VNet2. The solution must minimize administrative effort. Which two actions should you perform? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 393/951

**Risposta corretta:** First action -> Delete VM1. | Second action -> Create a new virtual machine.
> Immagini: q257_post0.png

**Spiegazione:** We cannot just move a virtual machine between networks. What we need to do is identify the disk used by the VM, delete the VM itself while retaining the disk, and recreate the VM in the target virtual network and then attach the original disk to it. Reference: https://blogs.technet.microsoft.com/canitpro/2014/06/16/step-by-step-move-a-vm-to-a-different- vnet-on-azure/ https://4sysops.com/archives/move-an-azure-vm-to-another-virtual-network- vnet/#migrate-an-azure-vm-between-vnets 394/951 Q257 · June 30, 2026 395/951

---

## Domanda 258
*Tipo: multiple_choice · fonte: text_layer*

You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines. You need to modify the template to reference an administrative password. You MUST prevent the password from being stored in plain text. What should you create to store the password?

- **A.** an Azure Key Vault and an access policy **← CORRETTA**
- **B.** an Azure Storage account and an access policy
- **C.** a Recovery Services vault and a backup policy
- **D.** Azure Active Directory (AD) Identity Protection and an Azure policy

**Risposta corretta:** A

**Spiegazione:** To securely store an administrative password and prevent it from being stored in plain text in an Azure Resource Manager template, you should use an Azure Key Vault. Azure Key Vault allows you to store sensitive information such as passwords, secrets, and encryption keys. By referencing the Key Vault in the ARM template, the password can be securely retrieved during deployment, ensuring it is not exposed in plain text. An access policy in the Key Vault will control who and what can access the stored secrets, providing an additional layer of security. Q258 · June 30, 2026 396/951

---

## Domanda 259
*Tipo: hotspot · fonte: manual_vision*

You have the App Service plans shown in the following table. You plan to create the Azure web apps shown in the following table. You need to identify which App Service plans can be used for the web apps. What should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 397/951

**Risposta corretta:** WebApp1 -> ASP1 and ASP3 only | WebApp2 -> ASP1 only
> Immagini: q259_post0.png

**Spiegazione:** Box 1: ASP1 ASP3 - Asp1, ASP3: ASP.NET Core apps can be hosted both on Windows or Linux. Not ASP2: The region in which your app runs is the region of the App Service plan it's in. Box 2: ASP1 - ASP.NET apps can be hosted on Windows only. Reference: https://docs.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore?pivots=platform-linux https://docs.microsoft.com/en-us/azure/app-service/app-service-plan-manage# Q259 · June 30, 2026 398/951

---

## Domanda 260
*Tipo: hotspot · fonte: manual_vision*

You create a virtual machine scale set named Scale1. Scale1 is configured as shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. 399/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** If Scale1 is utilized at 85 percent for six minutes after it is deployed, Scale1 will be running [answer choice]. -> 6 virtual machines | If Scale1 is first utilized at 25 percent for six minutes after it is deployed, and then utilized at 50 percent for six minutes, Scale1 will be running [answer choice]. -> 2 virtual machines
> Immagini: q260_post0.png

**Spiegazione:** Box 1: 6 virtual machines - The Autoscale scale out rule increases the number of VMs by 2 if the CPU threshold is 80% or higher. The initial instance count is 4 and rises to 6 when the 2 extra instances of VMs are added. Box 2: 2 virtual machnes - The Autoscale scale in rule decreases the number of VMs by 4 if the CPU threshold is 30% or lower. The initial instance count is 4 and thus cannot be reduced to 0 as the minimum instances is set to 2. Instances are only added when the CPU threshold reaches 80%. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-overview https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-best-practices https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-common-scale-patterns 400/951 Q260 · June 30, 2026 401/951

---

## Domanda 261
*Tipo: multiple_choice · fonte: text_layer*

You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image. You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed. Which two actions should you perform? Each correct answer presents part of the solution. Note: Each correct selection is worth one point.

- **A.** Upload a configuration script **← CORRETTA**
- **B.** Create an automation account
- **C.** Create an Azure policy
- **D.** Modify the extensionProfile section of the Azure Resource Manager template **← CORRETTA**
- **E.** Create a new virtual machine scale set in the Azure portal

**Risposta corretta:** A, D

**Spiegazione:** To ensure that virtual machine scale sets have web server components installed during provisioning, you need to upload a configuration script and modify the extensionProfile section of the Azure Resource Manager template. Uploading the script helps automate the installation process, and the extensionProfile section allows the integration of custom scripts and extensions that run upon deployment, ensuring required software is installed without manual intervention. Q261 · June 30, 2026 402/951

---

## Domanda 262
*Tipo: hotspot · fonte: manual_vision*

You have an Azure Kubernetes Service (AKS) cluster named AKS1 and a computer named Computer1 that runs Windows 10. Computer1 that has the Azure CLI installed. You need to install the kubectl client on Computer1. Which command should you run? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Box 1 -> az | Box 2 -> aks
> Nota: Comando: az aks install-cli
> Immagini: q262_post0.png

**Spiegazione:** To install kubectl locally, use the az aks install-cli command: az aks install-cli Reference: https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough 403/951 Q262 · June 30, 2026 404/951

---

## Domanda 263
*Tipo: drag_and_drop · fonte: manual_vision*

You onboard 10 Azure virtual machines to Azure Automation State Configuration. You need to use Azure Automation State Configuration to manage the ongoing consistency of the virtual machine configurations. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.

**Risposta corretta:** 1. Upload a configuration to Azure Automation State Configuration -> 2. Compile a configuration into a node configuration -> 3. Check the compliance status of the node
> Immagini: q263_post0.png

**Spiegazione:** 405/951 Q263 · June 30, 2026 406/951

---

## Domanda 264
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine. Template1 contains the following text: The variables section in Template1 contains the following text: "location": "westeurope" The resources section in Template1 contains the following text: You need to deploy the virtual machine to the West US location by using Template1. What should you do?

- **A.** Modify the location in the resources section to westus **← CORRETTA**
- **B.** Select West US during the deployment
- **C.** Modify the location in the variables section to westus

**Risposta corretta:** A
> Esibito: q264_pre0.png, q264_pre1.png

**Spiegazione:** 407/951 The suggested answer is A. In the provided Azure Resource Manager template, the location for the virtual machine is directly specified within the resources section as 'westeurope'. To deploy the virtual machine to the 'West US' location, you should modify the location value directly in the resources section to 'westus'. This ensures that the virtual machine is deployed in the correct geographical region as intended. Q264 · June 30, 2026 408/951

---

## Domanda 265
*Tipo: multiple_choice · fonte: text_layer*

You create an App Service plan named Plan1 and an Azure web app named webapp1. You discover that the option to create a staging slot is unavailable. You need to create a staging slot for Plan1. What should you do first?

- **A.** From Plan1, scale up the App Service plan **← CORRETTA**
- **B.** From webapp1, modify the Application settings
- **C.** From webapp1, add a custom domain
- **D.** From Plan1, scale out the App Service plan

**Risposta corretta:** A

**Spiegazione:** To create a staging slot, the Azure App Service plan must support this feature, which is available only in the Standard, Premium, or Isolated tiers. If the option to create a staging slot is unavailable, it likely means that the current App Service plan is in a lower tier, such as Free or Basic. Scaling up the App Service plan will upgrade it to a higher tier that includes the staging slot feature, along with increased CPU, memory, and other resources. Q265 · June 30, 2026 409/951

---

## Domanda 266
*Tipo: multiple_choice · fonte: text_layer*

You plan to move a distributed on-premises app named App1 to an Azure subscription. After the planned move, App1 will be hosted on several Azure virtual machines. You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance. What should you create?

- **A.** one virtual machine scale set that has 10 virtual machines instances **← CORRETTA**
- **B.** one Availability Set that has three fault domains and one update domain
- **C.** one Availability Set that has 10 update domains and one fault domain
- **D.** one virtual machine scale set that has 12 virtual machines instances

**Risposta corretta:** A

**Spiegazione:** To ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance, you should create a virtual machine scale set with 10 virtual machine instances. In a virtual machine scale set, the instances are identically configured, and Azure can distribute the load across multiple instances, with a maximum of 20% of the instances being updated at a time during maintenance. This means that at most 2 out of 10 machines will be updated simultaneously, leaving at least 8 machines running, which meets the requirement. Q266 · June 30, 2026 410/951

---

## Domanda 267
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Creating an event subscription on a virtual machine and specifying it as the source for alerts in Azure Monitor is not sufficient for monitoring error events in the System event log. Instead, you need to create an Azure Log Analytics workspace, configure the data settings, and install the Microsoft Monitoring Agent on VM1. The alert should be created in Azure Monitor with the Log Analytics workspace as the source to properly log and analyze the error events. Q267 · June 30, 2026 411/951

---

## Domanda 268
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different subscription. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To move an Azure virtual machine to a different host immediately due to maintenance, you need to redeploy the VM to a new node. Moving a virtual machine to a different subscription does not accomplish this, as it only changes the billing and corporate structure without affecting the underlying physical host. Redeploying a VM involves re-provisioning it on a different node, ensuring that it runs on different hardware, thus mitigating the impact of maintenance on the original host. Q268 · June 30, 2026 412/951

---

## Domanda 269
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Redeploy blade, you click Redeploy. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Redeploying a virtual machine in Azure moves the VM to a new node within the Azure infrastructure. This process retains all configuration options and associated resources, effectively changing the host without altering the VM's settings. This solution addresses the requirement of moving VM1 to a different host immediately. Q269 · June 30, 2026 413/951

---

## Domanda 270
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Update management blade, you click Enable. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To move an Azure virtual machine to a different host immediately due to maintenance, you need to redeploy the VM. Enabling the Update management blade does not achieve this. Redeploying will move the VM to a new node within Azure, solving the issue. This process can be done through the Azure portal or via PowerShell command. Therefore, the solution provided does not meet the goal. Q270 · June 30, 2026 414/951

---

## Domanda 271
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a web app named webapp1. You need to add a custom domain named www.contoso.com to webapp1. What should you do first?

- **A.** Create a DNS record **← CORRETTA**
- **B.** Add a connection string
- **C.** Upload a certificate.
- **D.** Stop webapp1.

**Risposta corretta:** A

**Spiegazione:** To add a custom domain to an Azure web app, the first step is to create a DNS record. This involves mapping the custom domain name to the web app using either a CNAME record for subdomains or an A record for root domains. This mapping ensures that when users enter the custom domain in their browsers, the DNS system directs them to the correct Azure web app. Q271 · June 30, 2026 415/951

---

## Domanda 272
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the resources shown in the following table. VM1 connects to VNET1.You need to connect VM1 to VNET2.Solution: You move VM1 to RG2, and then you add a new network interface to VM1.Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q272_pre0.png

**Spiegazione:** To connect VM1 to VNET2, moving the resource group and adding a new network interface isn't sufficient. Virtual machines can only be associated with one virtual network, which is defined during the creation of the VM. The virtual network cannot be changed after deployment. Therefore, the appropriate solution is to delete VM1 and recreate it, ensuring it connects to VNET2 during this process. Q272 · June 30, 2026 416/951

---

## Domanda 273
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the resources shown in the following table. VM1 connects to VNET1.You need to connect VM1 to VNET2. Solution: You delete VM1. You recreate VM1, and then you create a new network interface for VM1 and connect it to VNET2. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q273_pre0.png

**Spiegazione:** The proposed solution suggests deleting VM1 and recreating it in VNET2. However, it is important to note that VM1 and VNET2 are located in different regions. Azure does not support placing a VM in a virtual network that is in a different region. Therefore, simply recreating VM1 in the same resource 417/951 group while attempting to connect it to VNET2 will not work. As VM1 and VNET2 are in different regions, additional steps such as migration of the VM to the different region are required. Consequently, the solution does not meet the goal of connecting VM1 from VNET1 to VNET2. Thus, the correct answer is no. Q273 · June 30, 2026 418/951

---

## Domanda 274
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the resources shown in the following table. VM1 connects to VNET1.You need to connect VM1 to VNET2. Solution: You turn off VM1, and then you add a new network interface to VM1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q274_pre0.png

**Spiegazione:** When connecting an existing Azure VM to a different virtual network (VNet), it's essential to understand that a VM's network interface can only be connected to VNets within the same region. Since VM1 is located in West US and VNET2 is in East Asia, simply adding a new network interface is insufficient. To connect VM1 to VNET2, the VM must be recreated in the region where VNET2 exists. 419/951 This involves deleting VM1, copying its disk to East Asia, and then creating a new VM in East Asia that connects to VNET2. Thus, the given solution does not meet the goal, confirming that the correct answer is 'No'. Q274 · June 30, 2026 420/951

---

## Domanda 275
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains the quotas shown in the following table. You deploy virtual machines to Subscription1 as shown in the following table. You plan to deploy the virtual machines shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 421/951

**Risposta corretta:** You can deploy VM3 to West US. -> Yes | You can deploy VM4 to West US. -> No | You can deploy VM5 to West US. -> No
> Immagini: q275_post0.png

**Spiegazione:** The total regional vCPUs is 20 so that means a maximum total of 20 vCPUs across all the different VM sizes. The deallocated VM with 16 vCPUs counts towards the total. VM20 and VM1 are using 18 of the maximum 20 vCPUs leaving only two vCPUs available. Reference: https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quotas Q275 · June 30, 2026 422/951

---

## Domanda 276
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains an Azure Availability Set named WEBPROD-AS-USE2 as shown in the following exhibit. You add 14 virtual machines to WEBPROD-AS-USE2. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 423/951

**Risposta corretta:** When Microsoft performs planned maintenance in East US 2, the maximum number of unavailable virtual machines will be [answer choice]. -> 2 | If the server rack in the Azure datacenter that hosts WEBPROD-AS-USE2 experiences a power failure, the maximum number of unavailable virtual machines will be [answer choice]. -> 7
> Immagini: q276_post0.png

**Spiegazione:** Box 1: 2 - There are 10 update domains. The 14 VMs are shared across the 10 update domains so four update domains will have two VMs and six update domains will have one VM. Only one update domain is rebooted at a time. Therefore, a maximum of two VMs will be offline. Box 2: 7 - There are 2 fault domains. The 14 VMs are shared across the 2 fault domains, so 7 VMs in each fault domain. A rack failure will affect one fault domain so 7 VMs will be offline. Reference: https://docs.microsoft.com/en-us/azure/virtual-machines/windows/manage-availability 424/951 Q276 · June 30, 2026 425/951

---

## Domanda 277
*Tipo: multiple_choice · fonte: text_layer*

You deploy an Azure Kubernetes Service (AKS) cluster named Cluster1 that uses the IP addresses shown in the following table. You need to provide internet users with access to the applications that run in Cluster1. Which IP address should you include in the DNS record for Cluster1?

- **A.** 131.107.2.1 **← CORRETTA**
- **B.** 10.0.10.11
- **C.** 172.17.7.1
- **D.** 192.168.10.2

**Risposta corretta:** A
> Esibito: q277_pre0.png

**Spiegazione:** To provide internet users with access to applications running in the AKS cluster, a public IP address must be used. In this scenario, 131.107.2.1 is assigned to the load balancer front end, which is necessary to route external traffic to the internal services of the cluster. The other IP addresses are private and are used for internal networking within the cluster, making them unsuitable for direct access by internet users. Q277 · June 30, 2026 426/951

---

## Domanda 278
*Tipo: multiple_choice · fonte: text_layer*

You have a deployment template named Template1 that is used to deploy 10 Azure web apps. You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs. What should you identify?

- **A.** five Azure Application Gateways
- **B.** one App Service plan **← CORRETTA**
- **C.** 10 App Service plans
- **D.** one Azure Traffic Manager
- **E.** one Azure Application Gateway

**Risposta corretta:** B

**Spiegazione:** To deploy 10 Azure web apps, you need an underlying infrastructure that specifies the compute resources. An App Service plan defines the region, storage, RAM, and CPU resources available for your web applications. Hosting all 10 web apps in a single App Service plan is cost-effective as it consolidates resources and minimizes costs compared to creating multiple plans. Multiple App Service plans would unnecessarily increase costs due to redundant resource allocation. Q278 · June 30, 2026 427/951

---

## Domanda 279
*Tipo: hotspot · fonte: manual_vision*

You plan to deploy an Azure container instance by using the following Azure Resource Manager template. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the template. 428/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** Internet users [answer choice]. -> can connect to the container from any device | If Internet Information Services (IIS) in the container fail, [answer choice]. -> the container will restart automatically
> Immagini: q279_post0.png

**Spiegazione:** Q279 · June 30, 2026 429/951

---

## Domanda 280
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of- business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size. You plan to make the following changes to VM1: Change the size to D8s v3. Add a 500-GB managed disk. Add the Puppet Agent extension. Enable Desired State Configuration Management. Which change will cause downtime for VM1?

- **A.** Enable Desired State Configuration Management
- **B.** Add a 500-GB managed disk
- **C.** Change the size to D8s v3 **← CORRETTA**
- **D.** Add the Puppet Agent extension

**Risposta corretta:** C

**Spiegazione:** Changing the size of an Azure virtual machine causes it to be restarted, which will result in downtime for the VM. This is because the virtual machine needs to be stopped and deallocated to change its size, and the process of resizing may require moving to a different hardware cluster. Other changes like adding a managed disk, installing extensions, or enabling Desired State Configuration Management do not inherently require downtime and can be performed while the VM is running. Q280 · June 30, 2026 430/951

---

## Domanda 281
*Tipo: multiple_choice · fonte: text_layer*

You have an app named App1 that runs on an Azure web app named webapp1. The developers at your company upload an update of App1 to a Git repository named Git1. Webapp1 has the deployment slots shown in the following table. You need to ensure that the App1 update is tested before the update is made available to users. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Swap the slots **← CORRETTA**
- **B.** Deploy the App1 update to webapp1-prod, and then test the update
- **C.** Stop webapp1-prod
- **D.** Deploy the App1 update to webapp1-test, and then test the update **← CORRETTA**
- **E.** Stop webapp1-test

**Risposta corretta:** A, D
> Esibito: q281_pre0.png

**Spiegazione:** To ensure that the App1 update is tested before being made available to users, you should deploy the App1 update to the staging slot, webapp1-test, and then test the update in this environment. Once testing is successful, you would then swap the staging slot with the production slot, webapp1- prod. This deployment method ensures that the updated app is thoroughly tested before being deployed to the live environment, minimizing the risk of issues affecting end users. 431/951 Q281 · June 30, 2026 432/951

---

## Domanda 282
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that has the following providers registered: Authorization Automation Resources Compute KeyVault Network Storage Billing Web Subscription1 contains an Azure virtual machine named VM1 that has the following configurations: Private IP address: 10.0.0.4 (dynamic) Network security group (NSG): NSG1 Public IP address: None Availability set: AVSet Subnet: 10.0.0.0/24 Managed disks: No Location: East US You need to record all the successful and failed connection attempts to VM1. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Enable Azure Network Watcher in the East US Azure region. **← CORRETTA**
- **B.** Add an Azure Network Watcher connection monitor.
- **C.** Register the MicrosoftLogAnalytics provider. **← CORRETTA**
- **D.** Create an Azure Storage account. 433/951
- **E.** Register the Microsoft.Insights resource provider.
- **F.** Enable Azure Network Watcher flow logs. **← CORRETTA**

**Risposta corretta:** A, C, F

**Spiegazione:** To record all successful and failed connection attempts to VM1, you need to perform several actions. Enabling Azure Network Watcher in the East US Azure region is essential for monitoring and logging network activities. Adding an Azure Network Watcher connection monitor will help track the connections to the VM. Registering the MicrosoftLogAnalytics provider is necessary for collecting and analyzing log data. Additionally, enabling Azure Network Watcher flow logs will allow you to capture the network traffic flowing through the NSG associated with the VM. Although creating an Azure Storage account is useful for storing logs, the subscription already includes a storage provider, so this step is not necessary. Q282 · June 30, 2026 434/951

---

## Domanda 283
*Tipo: multiple_choice · fonte: text_layer*

You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible. What should you do?

- **A.** Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine.
- **B.** Deploy five virtual machines. Modify the Size setting for each virtual machine.
- **C.** Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode.
- **D.** Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To deploy an Azure virtual machine scale set quickly and effectively, the best approach is to use a virtual machine scale set set to ScaleSetVM orchestration mode. This option allows Azure to handle the creation and management of the virtual machine instances automatically, based on predefined configurations. This is more efficient than deploying individual virtual machines and offers streamlined scaling and management. Q283 · June 30, 2026 435/951

---

## Domanda 284
*Tipo: multiple_choice · fonte: text_layer*

You plan to create the Azure web apps shown in the following table. What is the minimum number of App Service plans you should create for the web apps?

- **A.** 1
- **B.** 2 **← CORRETTA**
- **C.** 3
- **D.** 4

**Risposta corretta:** B
> Esibito: q284_pre0.png

**Spiegazione:** When creating Azure web apps with different runtime stacks, you need to consider the operating system requirements of each stack. .NET Core 3.1 and PHP 7.3 can run on both Windows and Linux, while ASP.NET V4.8 requires Windows, and Ruby 2.6 typically requires Linux. Since you cannot mix Windows and Linux applications within the same App Service Plan, you will need at least two App Service Plans: one for the Windows-based applications (WebApp1, WebApp2, and WebApp3) and one for the Linux-based application (WebApp4). Therefore, the minimum number of App Service plans you should create is two. Q284 · June 30, 2026 436/951

---

## Domanda 285
*Tipo: hotspot · fonte: manual_vision*

You have a pay-as-you-go Azure subscription that contains the virtual machines shown in the following table. You create the budget shown in the following exhibit. 437/951 The AG1 action group contains a user named admin@contoso.com only. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. 438/951

**Risposta corretta:** When the maximum amount in Budget1 is reached, [answer choice]. -> VM1 and VM2 continue to run | Based on the current usage costs of the virtual machines, [answer choice]. -> one email notification will be sent each month
> Immagini: q285_post0.png

**Spiegazione:** Box 1: VM1 and VM2 continue to run The budget alerts are for Resource Group RG1, which include VM1, but not VM2. However, when the budget thresholds you've created are exceeded, only notifications are triggered. None of your resources are affected and your consumption isn't stopped. Box 2: one email notification will be sent each month. Budget alerts for Resource Group RG1, which include VM1, but not VM2.VM1 consumes 20 Euro/day. The 50%, 500 Euro limit, will be reached in 25 days, and an email will be sent. The 70% and 100% alert conditions will not be reached within a month, and they don't trigger email actions anyway. Credit alerts: Credit alerts are generated automatically at 90% and at 100% of your Azure credit balance. Whenever an alert is generated, it's reflected in cost alerts and in the email sent to the account owners. 90% and 100% will not be reached though. Reference: https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor- usage-spending https://docs.microsoft.com/en-gb/azure/cost-management-billing/costs/tutorial- acm-create-budgets 439/951 Q285 · June 30, 2026

---

## Domanda 286
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To view the date and time when the resources were created in a specific resource group, you should look at the deployment history for that resource group. This information can be found by navigating to the 'Deployments' section within the resource group blade (RG1). The 'Programmatic deployment' option in the Subscription blade does not provide the deployment history or creation dates for resources in a specific resource group. Q286 · June 30, 2026 440/951

---

## Domanda 287
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the resources shown in the following table. VM1 connects to VNET1. You need to connect VM1 to VNET2. Solution: You create a new network interface, and then you add the network interface to VM1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q287_pre0.png

**Spiegazione:** When an Azure Virtual Machine (VM) is created, it must be associated with a specific Virtual Network (VNet). Although you can modify the subnet a VM is connected to after creation, it is not possible to change the VNet directly. Therefore, to connect VM1 to VNET2, the correct approach is to delete VM1, recreate it, and then ensure that the new VM is associated with VNET2 by adding the 441/951 appropriate network interface during the deployment process. Simply creating a new network interface and adding it to VM1 will not achieve the goal. Q287 · June 30, 2026 442/951

---

## Domanda 288
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant named adatum.com that contains the users shown in the following table. Adatum.com has the following configurations: Users may join devices to Azure AD is set to User1. Additional local administrators on Azure AD joined devices is set to None. You deploy Windows 10 to a computer named Computer1. User1 joins Computer1 to adatum.com. You need to identify the local Administrator group membership on Computer1.Which users are members of the local Administrators group?

- **A.** User1 only
- **B.** User2 only
- **C.** User1 and User2 only **← CORRETTA**
- **D.** User1, User2, and User3 only
- **E.** User1, User2, User3, and User4

**Risposta corretta:** C
> Esibito: q288_pre0.png

**Spiegazione:** In an Azure Active Directory environment, users who join devices to Azure AD are automatically made local administrators of those devices. Additionally, Global Administrators in Azure AD also have local administrator rights by default. Therefore, on Computer1, User1, who performed the Azure AD 443/951 join, and User2, who is a Global Administrator, will be members of the local Administrators group. User3 and User4, holding the roles of Cloud Device Administrator and Intune Administrator respectively, do not grant the local administrator rights by default. As such, the correct answer is that User1 and User2 will be the members of the local Administrators group. Q288 · June 30, 2026 444/951

---

## Domanda 289
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have Azure subscriptions named Subscription1 and Subscription2. Subscription1 has following resource groups: RG1 includes a web app named App1 in the West Europe location. Subscription2 contains the following resource groups: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** App1 can be moved to RG2 -> Yes | App1 can be moved to RG3 -> Yes | App1 can be moved to RG4 -> Yes
> Immagini: q289_post0.png

**Spiegazione:** 445/951 Q289 · June 30, 2026 446/951

---

## Domanda 290
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains the following resource group: Name: RG1 Region: West US Tag: `tag1`: `value1` You assign an Azure policy named Policy1 to Subscription1 by using the following configurations: Exclusions: None Policy definition: Append a tag and its value to resources Assignment name: Policy1 Parameters: Tag name: tag2 Tag value: value2 - After Policy1 is assigned, you create a storage account that has the following configuration: Name: storage1 Location: West US Resource group: RG1 Tags: `tag3`: `value3` You need to identify which tags are assigned to each resource. What should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 447/951

**Risposta corretta:** Tags assigned to RG1 -> "tag1": "value1" only | Tags assigned to storage1 -> "tag2": "value2" and "tag3": "value3" only
> Immagini: q290_post0.png

**Spiegazione:** Box 1: "tag1": "value1" only - Box 2: "tag2": "value2" and "tag3": "value3" only Tags applied to the resource group are not inherited by the resources in that resource group. Reference: https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags Q290 · June 30, 2026 448/951

---

## Domanda 291
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1. In Subscription1, you create an alert rule named Alert1. The Alert1 action group is configured as shown in the following exhibit. Alert1 alert criteria triggered every minute. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 449/951

**Risposta corretta:** The number of email messages that Alert1 will send in an hour is -> 60 | The number of SMS messages that Alert2 will send in an hour is -> 12
> Immagini: q291_post0.png

**Spiegazione:** Box 1: 60 - One alert per minute will trigger one email per minute. Box 2: 12 - No more than 1 SMS every 5 minutes can be send, which equals 12 per hour. Note: Rate limiting is a suspension of notifications that occurs when too many are sent to a particular phone number, email address or device. Rate limiting ensures that alerts are manageable and actionable. The rate limit thresholds are: ✑ SMS: No more than 1 SMS every 5 minutes. ✑ Voice: No more than 1 Voice call every 5 minutes. ✑ Email: No more than 100 emails in an hour. ✑ Other actions are not rate limited. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-rate-limiting 450/951 Q291 · June 30, 2026 451/951

---

## Domanda 292
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains the resources shown in the following table. You create virtual machines in Subscription1 as shown in the following table. You plan to use Vault1 for the backup of as many virtual machines as possible. Which virtual machines can be backed up to Vault1?

- **A.** VM1 only
- **B.** VM3 and VMC only
- **C.** VM1, VM2, VM3, VMA, VMB, and VMC
- **D.** VM1, VM3, VMA, and VMC only **← CORRETTA**
- **E.** VM1 and VM3 only

**Risposta corretta:** D
> Esibito: q292_pre0.png, q292_pre1.png

**Spiegazione:** 452/951 To use a Recovery Services Vault for backing up virtual machines, the virtual machines must reside in the same region as the vault. Vault1 is in the West Europe region. Therefore, only virtual machines in the West Europe region can be backed up to Vault1. The virtual machines in this region are VM1, VM3, VMA, and VMC. The region, rather than the resource group or operating system, is the key factor in determining whether the VMs can be backed up to the vault. Q292 · June 30, 2026 453/951

---

## Domanda 293
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Kubernetes Service (AKS) cluster named AKS1. You need to configure cluster autoscaler for AKS1. Which two tools should you use? Each correct answer presents a complete solution. Note: Each correct selection is worth one point.

- **A.** the kubectl command
- **B.** the az aks command **← CORRETTA**
- **C.** the Set-AzVm cmdlet
- **D.** the Azure portal **← CORRETTA**
- **E.** the Set-AzAks cmdlet

**Risposta corretta:** B, D

**Spiegazione:** To configure the cluster autoscaler for an Azure Kubernetes Service (AKS) cluster, you should use the Azure CLI with the 'az aks' command and the Azure portal. The 'az aks' command allows you to manage various AKS cluster settings, including enabling and configuring the cluster autoscaler. The Azure portal provides a graphical interface where you can navigate to your AKS cluster's node pool and set up the autoscaling configurations. The kubectl command is used for managing Kubernetes resources such as pods, not for configuring the AKS cluster's autoscaling settings. Q293 · June 30, 2026 454/951

---

## Domanda 294
*Tipo: multiple_choice · fonte: text_layer*

You create the following resources in an Azure subscription: An Azure Container Registry instance named Registry1 An Azure Kubernetes Service (AKS) cluster named Cluster1 You create a container image named App1 on your administrative workstation. You need to deploy App1 to Cluster1. What should you do first?

- **A.** Run the docker push command. **← CORRETTA**
- **B.** Create an App Service plan.
- **C.** Run the az acr build command.
- **D.** Run the az aks create command.

**Risposta corretta:** A

**Spiegazione:** In order to deploy a container image (App1) to an Azure Kubernetes Service (AKS) cluster, the image needs to be stored in a container registry that the AKS cluster can access. Given that the container image is already created on the administrative workstation, the appropriate next step is to push this image to the Azure Container Registry (Registry1). The docker push command is used for uploading the container image to the Azure Container Registry, making it accessible for deployment to the AKS cluster. Q294 · June 30, 2026 455/951

---

## Domanda 295
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to configure a proximity placement group for VMSS1. Which proximity placement groups should you use?

- **A.** Proximity2 only **← CORRETTA**
- **B.** Proximity1, Proximity2, and Proximity3
- **C.** Proximity1 only
- **D.** Proximity1 and Proximity3 only

**Risposta corretta:** A
> Esibito: q295_pre0.png

**Spiegazione:** For a proximity placement group to function correctly, the resources must be in the same region as the virtual machine scale set (VMSS). In this case, VMSS1 is located in the West US region and belongs to Resource Group 2 (RG2). Among the proximity placement groups listed, only Proximity2 is in the West US region. Therefore, the correct choice is to use Proximity2 only. Q295 · June 30, 2026 456/951

---

## Domanda 296
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the Subscriptions blade, you select the subscription, and then click Resource providers. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To view the date and time when resources were created within a resource group in Azure, you need to navigate to the Resource Group (RG1 in this case), and then click on the Deployments blade. The Deployments section provides a history of deployments and shows information about when resources were created. Accessing Resource providers from the Subscriptions blade will not provide the creation date and time of the resources in RG1. Q296 · June 30, 2026 457/951

---

## Domanda 297
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the RG1 blade, you click Automation script. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To view the date and time when resources were created in an Azure resource group, you should navigate to the 'Deployments' section within the resource group blade. The 'Deployments' section provides a history of deployments, including timestamps, which allows you to see when each resource was created. Choosing 'Automation script' does not provide this information. That section is used for viewing and downloading the ARM templates used for deployment, not for viewing resource creation dates and times. Q297 · June 30, 2026 458/951

---

## Domanda 298
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the RG1 blade, you click Deployments. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To view the date and time when the resources were created in RG1, you can navigate to the RG1 blade and click on Deployments. This action will display a history of deployments for the resource group, including the timestamps of when each resource was deployed. This method provides the required information and meets the goal. Q298 · June 30, 2026 459/951

---

## Domanda 299
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. You deploy a Linux virtual machine named VM1 to Subscription1. You need to monitor the metrics and the logs of VM1. What should you use?

- **A.** Azure HDInsight
- **B.** Linux Diagnostic Extension (LAD) 3.0 **← CORRETTA**
- **C.** the AzurePerformanceDiagnostics extension
- **D.** Azure Analysis Services

**Risposta corretta:** B

**Spiegazione:** To monitor the metrics and logs of a Linux virtual machine in Azure, the correct tool to use is the Linux Diagnostic Extension (LAD) 3.0. This extension is specifically designed to collect diagnostic data, logs, and metrics from Linux virtual machines running in Azure. It helps monitor key performance indicators such as CPU, memory, and disk usage, as well as collect system logs and custom logs. Other options like Azure HDInsight, Azure Performance Diagnostics extension, and Azure Analysis Services do not offer these monitoring capabilities for Linux VMs. Q299 · June 30, 2026 460/951

---

## Domanda 300
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.You install and configure a web server and a DNS server on VM1. VM1 has the effective network security rules shown in the following exhibit: Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.NOTE: Each correct selection is worth one point.Hot Area:

**Risposta corretta:** Internet users [answer choice]. -> can connect to only the web server on VM1 | If you delete Rule2, Internet users [answer choice]. -> can connect to the web server and the DNS server on VM1
> Immagini: q300_post0.png

**Spiegazione:** Box 1: Rule2 blocks ports 50-60, which includes port 53, the DNS port. Internet users can reach to the Web server, since it uses port 80. 461/951 Box 2: If Rule2 is removed internet users can reach the DNS server as well. Note: Rules are processed in priority order, with lower numbers processed before higher numbers, because lower numbers have higher priority. Once traffic matches a rule, processing stops. As a result, any rules that exist with lower priorities (higher numbers) that have the same attributes as rules with higher priorities are not processed. Reference: https://docs.microsoft.com/en-us/azure/virtual-network/security-overview Q300 · June 30, 2026 462/951

---

## Domanda 301
*Tipo: multiple_choice · fonte: text_layer*

You plan to deploy three Azure virtual machines named VM1, VM2, and VM3. The virtual machines will host a web app named App1. You need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable.What should you deploy?

- **A.** all three virtual machines in a single Availability Zone
- **B.** all virtual machines in a single Availability Set
- **C.** each virtual machine in a separate Availability Zone **← CORRETTA**
- **D.** each virtual machine in a separate Availability Set

**Risposta corretta:** C

**Spiegazione:** To ensure high availability when a single Azure datacenter becomes unavailable, you should deploy each virtual machine in a separate Availability Zone. Availability Zones are unique physical locations within an Azure region, each with independent power, cooling, and networking. By placing each virtual machine in a different Availability Zone, you protect the application from datacenter-level failures, ensuring that at least two virtual machines remain available if any single datacenter fails. Q301 · June 30, 2026 463/951

---

## Domanda 302
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine named VM1 that runs Windows Server 2019. You save VM1 as a template named Template1 to the Azure Resource Manager library. You plan to deploy a virtual machine named VM2 from Template1. What can you configure during the deployment of VM2?

- **A.** operating system
- **B.** administrator username
- **C.** virtual machine size
- **D.** resource group **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** When deploying a virtual machine from a template to the Azure Resource Manager library, you can configure the resource group during the deployment process. The resource group acts as a logical container for managing the resources. While other parameters like the administrator username, operating system, and virtual machine size can be preconfigured in the template, the resource group must be chosen during deployment to allow segregation and management of resources based on organizational needs. Q302 · June 30, 2026 464/951

---

## Domanda 303
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances. At the end of each month, CPU usage for VM1 peaks when App1 runs. You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month. What task should you include in the runbook?

- **A.** Add the Azure Performance Diagnostics agent to VM1.
- **B.** Modify the VM size property of VM1. **← CORRETTA**
- **C.** Add VM1 to a scale set.
- **D.** Increase the vCPU quota for the subscription.
- **E.** Add a Desired State Configuration (DSC) extension to VM1.

**Risposta corretta:** B

**Spiegazione:** To meet the requirement of increasing the processor performance of VM1 at the end of each month, the task should include modifying the VM size property of VM1. By changing the VM size to a higher-tier with more vCPUs, we can temporarily scale up the processing power to handle the increased CPU usage during peak times. This can be automated using a scheduled runbook. Q303 · June 30, 2026 465/951

---

## Domanda 304
*Tipo: multiple_choice · fonte: text_layer*

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?

- **A.** Deployment Center in Azure App Service
- **B.** A Desired State Configuration (DSC) extension **← CORRETTA**
- **C.** the New-AzConfigurationAssignment cmdlet
- **D.** a Microsoft Intune device configuration profile

**Risposta corretta:** B

**Spiegazione:** To ensure that NGINX is available on all Azure virtual machines after deployment using an Azure Resource Manager template, the preferred method is to use a Desired State Configuration (DSC) extension. DSC is a management platform used to automatically configure, deploy, and manage systems. Using a DSC extension allows administrators to define the desired state and ensure that NGINX is installed and configured across all virtual machines consistently. Other options, such as Deployment Center in Azure App Service, the New-AzConfigurationAssignment cmdlet, and a Microsoft Intune device configuration profile, are either not suitable for virtual machine scale sets or not directly related to the task of installing and configuring software on these virtual machines. Q304 · June 30, 2026 466/951

---

## Domanda 305
*Tipo: hotspot · fonte: manual_vision*

You deploy an Azure Kubernetes Service (AKS) cluster that has the network profile shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 467/951

**Risposta corretta:** Containers will be assigned an IP address in the [answer choice] subnet. -> 10.244.0.0/16 | Services in the AKS cluster will be assigned an IP address in the [answer choice] subnet. -> 10.0.0.0/16
> Immagini: q305_post0.png

**Spiegazione:** Box 1: 10.244.0.0/16 - The Pod CIDR. Note: The --pod-cidr should be a large address space that isn't in use elsewhere in your network environment. This range includes any on-premises network ranges if you connect, or plan to connect, your Azure virtual networks using Express Route or a Site-to-Site VPN connection. This address range must be large enough to accommodate the number of nodes that you expect to scale up to. You can't change this address range once the cluster is deployed if you need more addresses for additional nodes. Box 2: 10.0.0.0/16 - The --service-cidr is used to assign internal services in the AKS cluster an IP address. Reference: https://docs.microsoft.com/en-us/azure/aks/configure-kubenet 468/951 Q305 · June 30, 2026 469/951

---

## Domanda 306
*Tipo: hotspot · fonte: manual_vision*

You have the App Service plan shown in the following exhibit. The scale-in settings for the App Service plan are configured as shown in the following exhibit. 470/951 The scale out rule is configured with the same duration and cool down tile as the scale in rule. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 471/951

**Risposta corretta:** If after deployment CPU usage is 70 percent for one hour and then reaches 90 percent for five minutes, at that time the total number of instances will be [answer choice]. -> 5 | If after deployment the CPU maintains constant usage of 90 percent for one hour, and then the average CPU usage is below 25 percent for nine minutes, at that point the number of instances will be [answer choice]. -> 3
> Immagini: q306_post0.png

**Spiegazione:** Box 1: 5 - The maximum 5 will kept as the CPU Usage >= 30. Box 2: 3 - As soon as the average CPU usage drops below 30%, the count will decrease by 1. After the 5 minute cool-down it will decrease by another 1, reaching 3. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-autoscale-performance- schedule Q306 · June 30, 2026 472/951

---

## Domanda 307
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine named VM1 that runs Windows Server 2019. The VM was deployed using default drive settings. You sign in to VM1 as a user named User1 and perform the following actions: Create files on drive C. Create files on drive D. Modify the screen saver timeout. Change the desktop background. You plan to redeploy VM1. Which changes will be lost after you redeploy VM1?

- **A.** the modified screen saver timeout
- **B.** the new desktop background
- **C.** the new files on drive D **← CORRETTA**
- **D.** the new files on drive C

**Risposta corretta:** C

**Spiegazione:** When you redeploy an Azure virtual machine, the data on the temporary drive, often designated as drive D, will be lost. This temporary storage is used primarily for storing page files and other transient data. In contrast, the changes made on the C drive, such as modifying the screen saver timeout, changing the desktop background, and creating files, will be retained because the C drive is persistent storage. Therefore, the new files on drive D will be lost after redeploying VM1. Q307 · June 30, 2026 473/951

---

## Domanda 308
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You have an on-premises virtual machine named VM1. The settings for VM1 are shown in the exhibit. (Click the Exhibit tab.) You need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines. What should you modify on VM1? 474/951

- **A.** the memory
- **B.** the network adapters
- **C.** the hard drive **← CORRETTA**
- **D.** the processor
- **E.** Integration Services

**Risposta corretta:** C
> Esibito: q308_pre0.png

**Spiegazione:** To ensure that the disks attached to VM1 can be used as a template for Azure virtual machines, you need to modify the hard drive. The settings show that the current virtual hard disk is in the VHDX format. Azure supports only virtual hard disks that are in the VHD file format and have a fixed-sized disk. Therefore, you must convert the VHDX file to a VHD file and ensure it is a fixed-size disk before uploading it to Azure. Q308 · June 30, 2026 475/951

---

## Domanda 309
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a virtual machine scale set. The scale set contains four instances that have the following configurations: Operating system: Windows Server 2016 Size: Standard_D1_v2 You run the get-azvmss cmdlet as shown in the following exhibit: Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 476/951

**Risposta corretta:** When an administrator changes the virtual machine size, the size will be changed on up to [answer choice] virtual machines simultaneously. -> 4 | When a new build of the Windows Server 2016 image is released, the new build will be deployed to up to [answer choice] virtual machines simultaneously. -> 1
> Immagini: q309_post0.png

**Spiegazione:** Q309 · June 30, 2026 477/951

---

## Domanda 310
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that is used by several departments at your company. Subscription1 contains the resources in the following table: Another administrator deploys a virtual machine named VM1 and an Azure Storage account named storage2 by using a single Azure Resource Manager template. You need to view the template used for the deployment. From which blade can you view the template that was used for the deployment?

- **A.** VM1
- **B.** RG1 **← CORRETTA**
- **C.** storage2
- **D.** container1

**Risposta corretta:** B
> Esibito: q310_pre0.png

**Spiegazione:** To view the template used for the deployment of a virtual machine and an Azure Storage account, you need to look at the deployment history within the resource group they were deployed to. In Azure, Resource Manager templates can be viewed from the resource group they were executed in, as the resource group contains and manages all the related resources and their deployment history. Thus, you can find the deployment history and view the template from RG1, the resource group in question. 478/951 Q310 · June 30, 2026 479/951

---

## Domanda 311
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure web app named App1. App1 has the deployment slots shown in the following table: In webapp1-test, you test several changes to App1. You back up App1. You swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues. You need to revert to the previous version of App1 as quickly as possible. What should you do?

- **A.** Redeploy App1
- **B.** Swap the slots **← CORRETTA**
- **C.** Clone App1
- **D.** Restore the backup of App1

**Risposta corretta:** B
> Esibito: q311_pre0.png

**Spiegazione:** To revert to a previous version of an Azure web app quickly after encountering performance issues following a slot swap, you should swap the slots back. Swapping deployment slots in Azure changes the Virtual IP addresses of the source and destination slots, effectively switching their URLs. This process maintains the app content and configuration elements, making it seamless to revert changes by swapping the slots again, without downtime or dropping requests. Q311 · June 30, 2026 480/951

---

## Domanda 312
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Subscription1. Subscription1 contains two Azure virtual machines VM1 and VM2. VM1 and VM2 run Windows Server2016. VM1 is backed up daily by Azure Backup without using the Azure Backup agent.VM1 is affected by ransomware that encrypts data. You need to restore the latest backup of VM1.To which location can you restore the backup? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can perform a file recovery of VM1 to -> Any Windows computer that has Internet connectivity | You can restore VM1 to -> VM1 or a new Azure virtual machine only
> Immagini: q312_post0.png

**Spiegazione:** 481/951 Q312 · June 30, 2026 482/951

---

## Domanda 313
*Tipo: multiple_choice · fonte: text_layer*

You plan to back up an Azure virtual machine named VM1. You discover that the Backup Pre-Check status displays a status of Warning. What is a possible cause of the Warning status?

- **A.** VM1 is stopped.
- **B.** VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed. **← CORRETTA**
- **C.** VM1 has an unmanaged disk.
- **D.** A Recovery Services vault is unavailable.

**Risposta corretta:** B

**Spiegazione:** The Warning status in the Backup Pre-Check typically indicates an issue with the Azure virtual machine's configuration that could potentially lead to backup failures. One common cause for this warning is that the virtual machine does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed. The Azure VM Agent is crucial as it facilitates the communication between the virtual machine and Azure to perform various operations, including backups. An outdated or missing VM Agent can result in intermittent backup failures, thereby triggering a warning in the Backup Pre-Check status. Q313 · June 30, 2026 483/951

---

## Domanda 314
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different resource group. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Moving a virtual machine to a different resource group does not change its physical host. Resource groups are logical containers for managing resources, but they do not affect where the virtual machine is physically hosted. To move VM1 to a different host immediately, you would need to redeploy it, which places the VM on a new host server within Azure. Q314 · June 30, 2026 484/951

---

## Domanda 315
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You plan to use Azure Resource Manager templates to deploy 50 Azure virtual machines that will be part of the same availability set. You need to ensure that as many virtual machines as possible are available if the fabric fails or during servicing. How should you configure the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** "platformFaultDomainCount" -> 3 | "platformUpdateDomainCount" -> 20
> Immagini: q315_post0.png

**Spiegazione:** 485/951 Q315 · June 30, 2026 486/951

---

## Domanda 316
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and configure the Agent configuration settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To create an alert in Azure when more than two error events are logged to the System event log on a virtual machine within an hour, follow these steps: First, configure an Azure Log Analytics workspace which collects log data. Next, install the Microsoft Monitoring Agent (MMA) on the virtual machine to send event log data to the Log Analytics workspace. Finally, create an alert rule in Azure Monitor using the Log Analytics workspace as the data source. This setup ensures that the specified log events trigger the desired alert in Azure Monitor. Q316 · June 30, 2026 487/951

---

## Domanda 317
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You deploy a virtual machine scale set that is configured as shown in the following exhibit. 488/951 Use the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic NOTE: Each correct selection is worth one point.

**Risposta corretta:** At 9:00 AM, the scale set starts and CPU utilization is 90 percent for 15 minutes. How many virtual machine instances will be running at 9:15 AM? -> 3 | At 10:00 AM, the scale set has five virtual machine instances running and CPU utilization falls to less than 15 percent for 60 minutes. How many virtual machine instances will be running at 11:00 AM? -> 1
> Immagini: q317_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets- autoscale-portal 489/951 Q317 · June 30, 2026 490/951

---

## Domanda 318
*Tipo: multiple_choice · fonte: text_layer*

You have web apps in the West US, Central US and East US Azure regions. You have the App Service plans shown in the following table. You plan to create an additional App Service plan named ASP5 that will use the Linux operating system. You need to identify in which of the currently used locations you can deploy ASP5. What should you recommend?

- **A.** West US, Central US, or East US **← CORRETTA**
- **B.** Central US only
- **C.** East US only
- **D.** West US only

**Risposta corretta:** A
> Esibito: q318_pre0.png

**Spiegazione:** App Service Plans can be deployed in any region where Azure is available, and you already have web apps deployed in West US, Central US, and East US Azure regions. Additionally, since you can have multiple app service plans in the same region and the operating system does not restrict deployment to any specific regions, you can deploy ASP5 in any of the currently used regions (West US, Central US, or East US). Therefore, the correct recommendation is to deploy ASP5 in West US, Central US, or East US. 491/951 Q318 · June 30, 2026

---

## Domanda 319
*Tipo: multiple_choice · fonte: text_layer*

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?

- **A.** the New-AzConfigurationAssignment cmdlet
- **B.** a Desired State Configuration (DSC) extension **← CORRETTA**
- **C.** Azure Active Directory (Azure AD) Application Proxy
- **D.** Azure Application Insights

**Risposta corretta:** B

**Spiegazione:** To ensure that NGINX is available on all the virtual machines after they are deployed in an Azure virtual machine scale set using an Azure Resource Manager template, you should use the Desired State Configuration (DSC) extension. DSC is a management platform in PowerShell that enables you to manage your IT and development infrastructure with configuration as code. By using a DSC extension, you can automate the process of installing NGINX on each virtual machine during deployment, ensuring consistency and reliability across your scale set. Q319 · June 30, 2026 492/951

---

## Domanda 320
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. In Azure Cloud Shell, you need to create a virtual machine by using an Azure Resource Manager (ARM) template. How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Cmdlet -> New-AzResourceGroupDeployment | Parametro -> -ResourceGroupName RG1 `
> Immagini: q320_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/powershell/module/az.resources/new- azresourcegroupdeployment?view=azps-6.6.0 493/951 Q320 · June 30, 2026

---

## Domanda 321
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some questions sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure Cloud Shell, you run az aks. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To deploy a YAML file in an Azure Kubernetes Service (AKS) cluster, you need to use the 'kubectl' command-line tool, which is designed for interacting with and managing Kubernetes clusters. The appropriate command to deploy a YAML file is 'kubectl apply -f .yaml'. The 'az aks' command is used for managing AKS clusters at a higher level, such as creating, scaling, and updating clusters, but it is not used for deploying YAML files directly to the cluster. Therefore, using 'az aks' to deploy a YAML file does not meet the goal. Q321 · June 30, 2026 494/951

---

## Domanda 322
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and configure the data settings. You add the Microsoft Monitoring Agent VM extension to VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour, you can indeed create an Azure Log Analytics workspace and configure the data settings. Adding the Microsoft Monitoring Agent VM extension to VM1 is a valid approach. You then create an alert in Azure Monitor, specifying the Log Analytics workspace as the source. This setup allows you to collect the necessary logs and configure the monitoring and alerting as required. Q322 · June 30, 2026 495/951

---

## Domanda 323
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Creating an Azure Log Analytics workspace and configuring the data settings, then installing the Microsoft Monitoring Agent on VM1 and creating an alert in Azure Monitor using the Log Analytics workspace as the source meets the goal. The Microsoft Monitoring Agent collects monitoring data, which is then stored in a Log Analytics workspace. Azure Monitor can identify important information from this workspace and create an alert based on log search criteria, in this case, more than two error events in the System event log within an hour. Q323 · June 30, 2026 496/951

---

## Domanda 324
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. All virtual machines run Windows Server 2016. On VM1, you back up a folder named Folder1 as shown in the following exhibit. You plan to restore the backup to a different virtual machine. You need to restore the backup to VM2. What should you do first?

- **A.** From VM1, install the Windows Server Backup feature.
- **B.** From VM2, install the Microsoft Azure Recovery Services Agent. 497/951 **← CORRETTA**
- **C.** From VM1, install the Microsoft Azure Recovery Services Agent.
- **D.** From VM2, install the Windows Server Backup feature.

**Risposta corretta:** B
> Esibito: q324_pre0.png, q324_pre1.png

**Spiegazione:** To restore the backup to VM2, you should first install the Microsoft Azure Recovery Services (MARS) Agent on VM2. The MARS agent is responsible for managing backups and restores with the Azure Backup service. By installing this agent on VM2, you can facilitate the restoration process from the recovery services vault to the target virtual machine, regardless of the regional location differences. This approach aligns with Azure's capabilities for managing backups and restores across different regions using MARS. Q324 · June 30, 2026 498/951

---

## Domanda 325
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You need to use an Azure Resource Manager (ARM) template to create a virtual machine that will have multiple data disks. How should you complete the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Box 1 (storageProfile) -> "copy":[ | Box 2 ("lun") -> "[copyIndex
> Immagini: q325_post0.png

**Spiegazione:** 499/951 Q325 · June 30, 2026 500/951

---

## Domanda 326
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1 that contains the resources shown in the following table. Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1. You need to create a new network interface named NIC2 for VM1. Solution: You create NIC2 in RG1 and West US. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q326_pre0.png

**Spiegazione:** To achieve the goal of creating a new network interface named NIC2 for VM1, the network interface must be in the same location as VM1, which is West US. The solution proposes creating NIC2 in RG1, which is located in East US. The region of the resource group does not affect the region of its 501/951 resources, but the NIC itself must be in West US to match the region of VM1. Therefore, creating NIC2 in RG1 will not meet the goal as the region specified for NIC2 is incorrect. Q326 · June 30, 2026 502/951

---

## Domanda 327
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1 that contains the resources shown in the following table. Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1. You need to create a new network interface named NIC2 for VM1. Solution: You create NIC2 in RG2 and Central US. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q327_pre0.png

**Spiegazione:** The virtual machine you attach a network interface to must exist in the same location and subscription as the network interface. VM1, which is in West US, must have NICs that are also in West 503/951 US. Creating NIC2 in Central US will not meet this requirement. Therefore, the solution does not meet the goal. Q327 · June 30, 2026 504/951

---

## Domanda 328
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1 that contains the resources shown in the following table. Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1. You need to create a new network interface named NIC2 for VM1. Solution: You create NIC2 in RG2 and West US. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q328_pre0.png

**Spiegazione:** To create a new network interface named NIC2 for VM1, both the network interface (NIC2) and the virtual machine (VM1) must exist in the same location. VM1 is located in the West US region, so NIC2 must also be created in the West US region. While resource groups can be in different regions and 505/951 still contain resources in other locations, the critical requirement here is that the NIC and VM must be in the same Azure region. However, the solution proposes creating NIC2 in RG2 and West US, which fulfills both conditions. Thus, the appropriate answer would be that this solution meets the goal. Q328 · June 30, 2026 506/951

---

## Domanda 329
*Tipo: multiple_choice · fonte: text_layer*

You develop the following Azure Resource Manager (ARM) template to create a resource group and deploy an Azure Storage account to the resource group. Which cmdlet should you run to deploy the template?

- **A.** New-AzResource
- **B.** New-AzResourceGroupDeployment 507/951
- **C.** New-AzTenantDeployment
- **D.** New-AzDeployment **← CORRETTA**

**Risposta corretta:** D
> Esibito: q329_pre0.png

**Spiegazione:** The ARM template provided defines a deployment that creates a resource group and then deploys a storage account within that resource group. This operation requires deployment at the subscription level because the resource group itself is being created. The appropriate cmdlet for deploying resources at a subscription level is New-AzDeployment, which handles deployments that include the creation of resource groups and any resources within them. Therefore, New-AzDeployment is the correct cmdlet to use for this task. Q329 · June 30, 2026 508/951

---

## Domanda 330
*Tipo: hotspot · fonte: manual_vision*

You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2. You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup. What should you create first, and what should you use to exclude Folder2? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** First create -> An Azure Storage account | To exclude Folder2, use -> A _backup.filter file
> Immagini: q330_post0.png

**Spiegazione:** Box 1: An Azure Storage account - App Service can back up the following information to an Azure storage account and container that you have configured your app to use. App configuration - File content - 509/951 Database connected to your app - Note: Choose your backup destination by selecting a Storage Account and Container. The storage account must belong to the same subscription as the app you want to back up. If you wish, you can create a new storage account or a new container in the respective pages. Box 2: A _backup.filter file - Exclude files from your backup. Suppose you have an app that contains log files and static images that have been backup once and are not going to change. In such cases, you can exclude those folders and files from being stored in your future backups. To exclude files and folders from your backups, create a _backup.filter file in the D:\home\site \wwwroot folder of your app. Specify the list of files and folders you want to exclude in this file. Reference: https://docs.microsoft.com/en-us/azure/app-service/manage-backup Q330 · June 30, 2026 510/951

---

## Domanda 331
*Tipo: multiple_choice · fonte: text_layer*

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?

- **A.** the Publish-AzVMDscConfiguration cmdlet
- **B.** Azure Application Insights
- **C.** Azure Custom Script Extension **← CORRETTA**
- **D.** a Microsoft Endpoint Manager device configuration profile

**Risposta corretta:** C

**Spiegazione:** To ensure that NGINX is available on all the virtual machines after they are deployed in an Azure virtual machine scale set, you should use the Azure Custom Script Extension. This extension allows you to download and execute scripts on Azure VMs, making it ideal for post-deployment configuration and software installation, such as setting up NGINX. You can download scripts from Azure Storage or GitHub, or provide them at extension runtime through the Azure portal. This makes the Azure Custom Script Extension the best tool for installing applications like NGINX in a consistent and automated manner across all VMs in the scale set. Q331 · June 30, 2026 511/951

---

## Domanda 332
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. The subscription contains a virtual machine that runs Windows 10. You need to join the virtual machine to an Active Directory domain. How should you complete the Azure Resource Manager (ARM) template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 512/951

**Risposta corretta:** "type" -> "Microsoft.Compute/virtualMachines/extensions", | Box 2 (dopo settings) -> "ProtectedSettings":{
> Immagini: q332_post0.png

**Spiegazione:** Box 1: "Microsoft.Compute/VirtualMachines/extensions", The following JSON example uses the Microsoft.Compute/virtualMachines/extensions resource type to install the Active Directory domain join extension. Parameters are used that you specify at deployment time. When the extension is deployed, the VM is joined to the specified managed domain. Box 2: "ProtectedSettings":{ Example: { "apiVersion": "2015-06-15", 513/951 "type": "Microsoft.Compute/virtualMachines/extensions", "name": "[concat(parameters('dnsLabelPrefix'),'/joindomain')]", "location": "[parameters('location')]", "dependsOn": [ "[concat('Microsoft.Compute/virtualMachines/', parameters('dnsLabelPrefix'))]" ], "properties": { "publisher": "Microsoft.Compute", "type": "JsonADDomainExtension", "typeHandlerVersion": "1.3", "autoUpgradeMinorVersion": true, "settings": { "Name": "[parameters('domainToJoin')]", "OUPath": "[parameters('ouPath')]", "User": "[concat(parameters('domainToJoin'), '\\', parameters('domainUsername'))]", "Restart": "true", "Options": "[parameters('domainJoinOptions')]" }, "protectedSettings": { "Password": "[parameters('domainPassword')]" } } } Reference: https://docs.microsoft.com/en-us/azure/active-directory-domain-services/join-windows-vm- template 514/951 Q332 · June 30, 2026 515/951

---

## Domanda 333
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains three virtual machines named VM1, VM2, and VM3. All the virtual machines are in an availability set named AVSet1. You need to scale up VM1 to a new virtual machine size, but the intended size is unavailable. What should you do first?

- **A.** Create a proximity placement group.
- **B.** Deallocate VM1. **← CORRETTA**
- **C.** Convert AvSet1 into a managed availability set.
- **D.** Shut down VM3 and VM3.

**Risposta corretta:** B

**Spiegazione:** Q333 · June 30, 2026 516/951

---

## Domanda 334
*Tipo: hotspot · fonte: manual_vision*

You are creating an Azure Kubernetes Services (AKS) cluster as shown in the following exhibit. 517/951 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 518/951

**Risposta corretta:** To ensure that you can create Windows containers in AKS1, you must [answer choice]. -> modify the Network configuration setting | To ensure that you can integrate AKS1 with an Azure container registry, you must modify the [answer choice] setting. -> AKS-managed Azure Active Directory
> Immagini: q334_post0.png

**Spiegazione:** Q334 · June 30, 2026 519/951

---

## Domanda 335
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named Cluster1. Cluster1 hosts a node pool named Pool1 that has four nodes. You need to perform a coordinated upgrade of Cluster1. The solution must meet the following requirements: Deploy two new nodes to perform the upgrade. Minimize costs. How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** az aks nodepool [box 1] -> updates | [box 2] (dopo -n pool1 -g RG1 --cluster-name cluster1) -> --max-surge 2
> Nota: Comando completo: az aks nodepool updates -n pool1 -g RG1 --cluster-name cluster1 --max-surge 2
> Immagini: q335_post0.png

**Spiegazione:** 520/951 Q335 · June 30, 2026 521/951

---

## Domanda 336
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription. You create the following file named Deploy.json. You connect to the subscription and run the following commands. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 522/951

**Risposta corretta:** The commands will create four new resources. -> Yes | The commands will create storage accounts in the West US Azure region. -> No | The first storage account that is created will have a prefix of 0. -> Yes
> Immagini: q336_post0.png

**Spiegazione:** Q336 · June 30, 2026 523/951

---

## Domanda 337
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You set Admin user to Enable for Registry1. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Q337 · June 30, 2026 524/951

---

## Domanda 338
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a resource group named RG1. You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements: Deploy new resources to RG1. Remove all the existing resources from RG1 before deploying the new resources. How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** params.json [box 1] -> -ResourceGroupName | RG1 -Mode [box 2] -> Complete
> Immagini: q338_post0.png

**Spiegazione:** Q338 · June 30, 2026 525/951

---

## Domanda 339
*Tipo: hotspot · fonte: manual_vision*

You have an Azure App Service web app named app1. You configure autoscaling as shown in following exhibit. You configure the autoscale rule criteria as shown in the following exhibit. 526/951 527/951 Use the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** After CPU usage has reached 80 percent for 15 minutes, [answer choice] will be running. -> 2 instances | Once the first scale-out instance is created, the minimum time before an additional instance is created will be [answer choice]. -> 15 minutes
> Immagini: q339_post0.png

**Spiegazione:** Q339 · June 30, 2026 528/951

---

## Domanda 340
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You plan to deploy the Azure container instances shown in the following table. Which instances can you deploy to a container group?

- **A.** Instance1 only
- **B.** Instance2 only
- **C.** Instance1 and Instance2 only
- **D.** Instance3 and Instance4 only **← CORRETTA**

**Risposta corretta:** D
> Esibito: q340_pre0.png

**Spiegazione:** Azure Container Instances supports multi-container groups only for Linux containers. Windows containers can be deployed only as single container instances, not in multi-container groups. Therefore, only Instance3 and Instance4, which use Linux, can be deployed to a container group. Q340 · June 30, 2026 529/951

---

## Domanda 341
*Tipo: hotspot · fonte: manual_vision*

You have an Azure container registry named contoso2023 as shown in the following exhibit. You need to enable contoso2023 to use a dedicated data endpoint. Which two settings should you configure for contoso2023? To answer, select the appropriate settings in the answer area. NOTE: Each correct answer is worth one point. 530/951

**Risposta corretta:** Impostazione 1 -> Networking | Impostazione 2 -> Connected registries (Preview)
> Immagini: q341_post0.png

**Spiegazione:** 531/951 Q341 · June 30, 2026 532/951

---

## Domanda 342
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that has the public IP addresses shown in the following table. You plan to deploy an Instance of Azure Firewall Premium named FW1. Which IP addresses can you use?

- **A.** IP2 only
- **B.** IP1 and IP2 only **← CORRETTA**
- **C.** IP1, IP2, and IP5 only
- **D.** IP1, IP2, IP4, and IP5 only

**Risposta corretta:** B
> Esibito: q342_pre0.png

**Spiegazione:** To deploy an Azure Firewall Premium instance, the IP addresses must meet specific criteria: they must be Standard SKU, IPv4, and Static. From the table, IP1 and IP2 meet these requirements. IP3 and IP4 are not suitable because they are of the Basic SKU. IP5 is not suitable because it is IPv6 and Azure Firewall currently does not support IPv6. Therefore, the correct IP addresses that can be used are IP1 and IP2. Q342 · June 30, 2026 533/951

---

## Domanda 343
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template. How should you complete the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** "dependsOn" -> resourceId | "storageProfile" -> ImageReference
> Immagini: q343_post0.png

**Spiegazione:** 534/951 Q343 · June 30, 2026 535/951

---

## Domanda 344
*Tipo: hotspot · fonte: manual_vision*

You need to configure a new Azure App Service app named WebApp1. The solution must meet the following requirements: WebApp1 must be able to verify a custom domain name of app.contoso.com. WebApp1 must be able to automatically scale up to eight instances. Costs and administrative effort must be minimized. Which pricing plan should you choose, and which type of record should you use to verify the domain? To answer, select the appropriate options in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Pricing plan -> Standard | Record type -> TXT
> Immagini: q344_post0.png

**Spiegazione:** 536/951 Q344 · June 30, 2026 537/951

---

## Domanda 345
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual machines shown in the following table. You create an Azure Compute Gallery named ComputeGallery1 as shown in the Azure Compute Gallery exhibit. (Click the Azure Compute Gallery tab.) In ComputeGallery1, you create a virtual machine image definition named Image1 as shown in the image definition exhibit. (Click the Image Definition tab.) 538/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No, NOTE: Each correct selection is worth one point. 539/951

**Risposta corretta:** The operating system disk of VM1 can be used as a source for a version of Image1. -> Yes | The operating system disk of VM2 can be used as a source for a version of Image1. -> Yes | The operating system disk of VM3 can be used as a source for a version of Image1. -> Yes
> Immagini: q345_post0.png

**Spiegazione:** Q345 · June 30, 2026 540/951

---

## Domanda 346
*Tipo: multiple_choice · fonte: text_layer*

You plan to create the Azure web apps shown in the following table. What is the minimum number of App Service plans you should create for the web apps?

- **A.** 1
- **B.** 2 **← CORRETTA**
- **C.** 3
- **D.** 4

**Risposta corretta:** B
> Esibito: q346_pre0.png

**Spiegazione:** To determine the minimum number of App Service plans needed for the web apps, the key factor to consider is whether the runtime stack requires a Windows or Linux environment. Python 3.11 only runs on Linux, while ASP.NET V4.8 requires a Windows environment. The other runtimes, .NET 6 (LTS) and PHP 8.1, can run on either platform but will have to be placed on the appropriate platform to accommodate the needs of Python and ASP.NET. Therefore, at least two App Service plans are needed: one for Linux to support Python 3.11, and one for Windows to support ASP.NET V4.8. The .NET and PHP applications can share these plans. Thus, the correct answer is two App Service plans. 541/951 Q346 · June 30, 2026 542/951

---

## Domanda 347
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resource groups shown in the following table. You create the following Azure Resource Manager (ARM) template named deploy.json. You deploy the template by running the following cmdlet. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 543/951

**Risposta corretta:** The template creates a resource group named RG0 in the East US Azure region. -> Yes | The template creates four new resource groups. -> No | The template creates a resource group named RG3 in the West US Azure region. -> No
> Immagini: q347_post0.png

**Spiegazione:** Q347 · June 30, 2026 544/951

---

## Domanda 348
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure App Service app named App1 that contains two running instances. You have an autoscale rule configured as shown in the following exhibit. For the Instance limits scale condition setting, you set Maximum to 5. During a 30-minute period, App1 uses 80 percent of the available memory. What is the maximum number of instances for App1 during the 30-minute period?

- **A.** 2 545/951
- **B.** 3 **← CORRETTA**
- **C.** 4
- **D.** 5

**Risposta corretta:** B
> Esibito: q348_pre0.png

**Spiegazione:** The autoscale rule has a duration of 15 minutes and a 5-minute cooldown period. App1 starts with 2 instances. After 15 minutes, the memory usage is checked, and since it exceeds 70%, the instance count increases by 1, making it 3 instances. The cooldown period is 5 minutes, during which no scaling occurs. After the cooldown, which is at the 20-minute mark, there is not enough time to meet the 15-minute duration again within the remaining 10 minutes of the 30-minute period. Therefore, the maximum number of instances for App1 during the 30-minute period is 3. Q348 · June 30, 2026 546/951

---

## Domanda 349
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the container images shown in the following table. You plan to use the following services: Azure Container Instances Azure Container Apps Azure App Service In which services can you run the images? To answer, select the options in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Image1 -> Azure Container Instances and App Services only | Image2 -> Azure Container Instances, Azure Container Apps, and App Services
> Immagini: q349_post0.png

**Spiegazione:** 547/951 Q349 · June 30, 2026 548/951

---

## Domanda 350
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure AD tenant named contoso.com. You have an Azure subscription that contains an Azure App Service web app named App1 and an Azure key vault named KV1. KV1 contains a wildcard certificate for contoso.com. You have a user named user1@contoso.com that is assigned the Owner role for App1 and KV1. You need to configure App1 to use the wildcard certificate of KV1. What should you do first?

- **A.** Create an access policy for KV1 and assign the Microsoft Azure App Service principal to the policy.
- **B.** Assign a managed user identity to App1. **← CORRETTA**
- **C.** Configure KV1 to use the role-based access control (RBAC) authorization system.
- **D.** Create an access policy for KV1 and assign the policy to User1.

**Risposta corretta:** B

**Spiegazione:** To configure an Azure App Service web app to use a certificate from an Azure Key Vault, the first step is to ensure that the App Service has a managed identity. A managed identity allows the app to securely access resources, including Key Vault, without the need for client secrets. Once the managed identity is assigned, this identity can be granted the necessary permissions to access the certificate in the Key Vault. Therefore, assigning a managed user identity to App1 is essential and must be done first. Q350 · June 30, 2026 549/951

---

## Domanda 351
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You plan to deploy the resources shown in the following table. You need to create a single Azure Resource Manager (ARM) template that will be used to deploy the resources. Which resource should be added to the dependsOn section for VM1?

- **A.** VNET1
- **B.** NIC1 **← CORRETTA**
- **C.** IP1
- **D.** NSG1

**Risposta corretta:** B
> Esibito: q351_pre0.png

**Spiegazione:** When creating an Azure Resource Manager (ARM) template for deploying a virtual machine (VM), it is essential to sequence the dependencies correctly. In this scenario, the network interface card (NIC1) must be created and configured before the VM (VM1) because the VM needs a NIC to connect to the virtual network and other related network resources. Without having the NIC set up first, the VM wouldn't have the necessary network interface to function. Therefore, NIC1 should be added to the dependsOn section for VM1 to ensure proper deployment order. Q351 · June 30, 2026 550/951

---

## Domanda 352
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You create the following Azure Resource Manager (ARM) template named Template.json. You need to deploy Template.json. Which PowerShell cmdlet should you run from Azure Cloud Shell?

- **A.** New-AzSubscriptionDeployment **← CORRETTA**
- **B.** New-AzManagementGroupDeployment
- **C.** New-AzResourceGroupDeployment
- **D.** New-AzTenantDeployment

**Risposta corretta:** A
> Esibito: q352_pre0.png

**Spiegazione:** To deploy an Azure Resource Manager template that creates a new resource group, the appropriate cmdlet to use is New-AzSubscriptionDeployment. This cmdlet is suitable because creating a resource group is an operation at the subscription level, not within an existing resource group. Therefore, the command deploys resources and creates new resource groups at the subscription scope. 551/951 Q352 · June 30, 2026

---

## Domanda 353
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a resource group named RG1. You plan to create a storage account named storage1. You have a Bicep file named File1. You need to modify File1 so that it can be used to automate the deployment of storage1 to RG1. Which property should you modify?

- **A.** kind
- **B.** scope **← CORRETTA**
- **C.** sku
- **D.** location

**Risposta corretta:** B

**Spiegazione:** To automate the deployment of the storage account named storage1 to the resource group RG1 using a Bicep file, you need to modify the scope property. The scope property in a Bicep file specifies the resource group where the resource should be deployed. By adjusting the scope to the resource group RG1, you ensure that the storage account will be created in the desired target resource group. Q353 · June 30, 2026 552/951

---

## Domanda 354
*Tipo: hotspot_yes_no · fonte: manual_vision*

Your company purchases a new Azure subscription. You create a file named Deploy.json as shown in the following exhibit. 553/951 554/951 You connect to the subscription and run the following cmdlet. `New-AzDeployment -Location westus -TemplateFile "deploy.json"` For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** You can deploy a virtual machine to RG1. -> Yes | You can deploy a virtual machine to RG2. -> No | You can manually create a resource group named RG3. -> Yes
> Immagini: q354_post0.png

**Spiegazione:** Q354 · June 30, 2026 555/951

---

## Domanda 355
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to configure a proximity placement group for VMSS1. Which proximity placement groups should you use?

- **A.** Proximity2 only
- **B.** Proximity1, Proximity2, and Proximity3
- **C.** Proximity1 only **← CORRETTA**
- **D.** Proximity1 and Proximity3 only

**Risposta corretta:** C
> Esibito: q355_pre0.png

**Spiegazione:** To configure a proximity placement group for VMSS1, the proximity placement group should be in the same location as VMSS1, which is West US. Out of the provided options, only Proximity1 is in West US. Therefore, Proximity1 is the suitable choice to achieve the lowest latency for VMSS1 as it ensures that the resources are physically close to each other. Q355 · June 30, 2026 556/951

---

## Domanda 356
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. The subscription contains the Azure App Service web apps shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 557/951

**Risposta corretta:** WebApp1 can communicate with VM2. -> Yes | NSG1 controls inbound traffic to WebApp1. -> No | WebApp2 can communicate with VM1. -> No
> Immagini: q356_post0.png

**Spiegazione:** Q356 · June 30, 2026 558/951

---

## Domanda 357
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains the resources shown in the following table. You create virtual machines in Subscription1 as shown in the following table. You plan to use Vault1 for the backup of as many virtual machines as possible. Which virtual machines can be backed up to Vault1?

- **A.** VM1 only
- **B.** VM3 and VMC only
- **C.** VM1, VM2, VM3, VMA, VMB, and VMC
- **D.** VM1, VM3, VMA, and VMC only **← CORRETTA**
- **E.** VM1 and VM3 only

**Risposta corretta:** D
> Esibito: q357_pre0.png, q357_pre1.png

**Spiegazione:** 559/951 The suggested answer is D. Vault1 is located in the West Europe region. In Azure, for a virtual machine to be backed up to a Recovery Services vault, both the vault and the virtual machine must be in the same region. Therefore, only the virtual machines located in West Europe can be backed up to Vault1. These virtual machines are VM1, VM3, VMA, and VMC. Q357 · June 30, 2026

---

## Domanda 358
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains an Azure container registry named ContReg1. You enable the Admin user for ContReg1.Which username can you use to sign in to ContReg1?

- **A.** root
- **B.** admin
- **C.** administrator
- **D.** ContReg1 **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** When the admin user feature is enabled for an Azure container registry, the username used to sign in is the same as the name of the container registry itself. In this case, the container registry is named ContReg1, hence the username would be ContReg1. This is documented in the official Azure container registry authentication guidelines. Q358 · June 30, 2026 560/951

---

## Domanda 359
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You plan to create an Azure container registry named ContReg1. You need to ensure that you can push and pull signed images for ContReg1. What should you do for ContReg1?

- **A.** Enable encryption by using a customer-managed key.
- **B.** Create a connected registry.
- **C.** Add a token.
- **D.** Enable content trust. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** Q359 · June 30, 2026 561/951

---

## Domanda 360
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that has the Azure container registries shown in the following table. You plan to use ACR Tasks and configure private endpoint connections. Which container registries support ACR Tasks and private endpoints? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** ACR Tasks -> ContReg1, ContReg2, and ContReg3 | Private endpoints -> ContReg1 only
> Immagini: q360_post0.png

**Spiegazione:** 562/951 Q360 · June 30, 2026

---

## Domanda 361
*Tipo: multiple_choice · fonte: text_layer*

You plan to deploy several Azure virtual machines that will run Windows Server 2022 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?

- **A.** Azure Custom Script Extension **← CORRETTA**
- **B.** Deployment Center in Azure App Service
- **C.** Microsoft Entra Application Proxy
- **D.** the Publish-AzVMDscConfiguration cmdlet

**Risposta corretta:** A
> Esibito: q361_pre0.png

**Spiegazione:** Q361 · June 30, 2026 563/951

---

## Domanda 362
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a container group named Group1. Group1 contains two Azure container instances as shown in the following table. You need to ensure that container2 can use CPU resources without negatively affecting container1. What should you do?

- **A.** Increase the resource limit of container1 to three CPUs.
- **B.** Increase the resource limit of container2 to six CPUs.
- **C.** Remove the resource limit for both containers. **← CORRETTA**
- **D.** Decrease the resource limit of container2 to two CPUs.

**Risposta corretta:** C
> Esibito: q362_pre0.png

**Spiegazione:** Q362 · June 30, 2026 564/951

---

## Domanda 363
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You plan to deploy a container. You need to recommend which Azure services can scale the container automatically. What should you recommend?

- **A.** Azure Container Apps only
- **B.** Azure Container Instances only
- **C.** Azure Container Apps or Azure App Service only **← CORRETTA**
- **D.** Azure Container Instances or Azure App Service only
- **E.** Azure Container Apps, Azure Container Instances, or Azure App Service

**Risposta corretta:** C

**Spiegazione:** Q363 · June 30, 2026 565/951

---

## Domanda 364
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that uses Azure Container Instances. You have a computer that has Azure Command-Line Interface (CLI) and Docker installed. You create a container image named image1. You need to provision a new Azure container registry and add image1 to the registry. Which command should you run for each requirement? To answer, select the options in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Provision a new container registry -> az acr create | Add image1 to the registry -> docker push
> Immagini: q364_post0.png

**Spiegazione:** 566/951 Q364 · June 30, 2026 567/951

---

## Domanda 365
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You assign the AcrPull role to ACR-Tasks-Network for Registry1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q365 · June 30, 2026 568/951

---

## Domanda 366
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You select Use dedicated data endpoint for Registry1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q366 · June 30, 2026 569/951

---

## Domanda 367
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You create a private endpoint connection for Registry1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q367 · June 30, 2026 570/951

---

## Domanda 368
*Tipo: multiple_choice · fonte: text_layer*

You have a Standard Azure App Service plan named Plan1. You need to ensure that Plan1 will scale automatically when the CPU usage of the web app exceeds 80 percent. What should you select for Plan1?

- **A.** Automatic in the Scale out method settings
- **B.** Rules Based in the Scale out method settings **← CORRETTA**
- **C.** Premium P1 in the Scale up (App Service plan) settings
- **D.** Standard S1 in the Scale up (App Service plan) settings
- **E.** Manual in the Scale out method settings

**Risposta corretta:** B

**Spiegazione:** Q368 · June 30, 2026 571/951

---

## Domanda 369
*Tipo: multiple_choice · fonte: text_layer*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 572/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 573/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 574/951 Follow the principle of least privilege. Grant permissions at the required scope only. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You need to configure WebApp1 to meet the technical requirements. Which certificate can you use from Vault1?

- **A.** Cert1 only
- **B.** Cert1 or Cert2 only **← CORRETTA**
- **C.** Cert1 or Cert3 only
- **D.** Cert3 or Cert4 only
- **E.** Cert1, Cert2 Cert3, or Cert4

**Risposta corretta:** B
> Esibito: q369_pre0.png, q369_pre1.png, q369_pre2.png, q369_pre3.png, q369_pre4.png, q369_pre5.png, q369_pre6.png, q369_pre7.png

**Spiegazione:** Q369 · June 30, 2026 575/951

---

## Domanda 370
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the resource group blade, move VM1 to another subscription. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q370 · June 30, 2026 576/951

---

## Domanda 371
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the VM1 Redeploy + reapply blade, you select Redeploy. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Q371 · June 30, 2026 577/951

---

## Domanda 372
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the VM1 Updates blade, select One-time update. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Q372 · June 30, 2026 578/951

---

## Domanda 373
*Tipo: multiple_choice · fonte: text_layer*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 579/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 580/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o a legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 581/951 Follow the principle of least privilege. Grant permissions at the required scope only. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You need to meet the technical requirements for the KEK. Which PowerShell cmdlet and key should you use?

- **A.** Set-AzVMDiskEncryptionExtension and Key2.
- **B.** Set-AzDiskEncryptionKey and Key2.
- **C.** Set-AzDiskDiskEncryptionKey and Key1.
- **D.** Set-AzVMDiskEncryptionExtension and Key1. **← CORRETTA**

**Risposta corretta:** D
> Esibito: q373_pre0.png, q373_pre1.png, q373_pre2.png, q373_pre3.png, q373_pre4.png, q373_pre5.png, q373_pre6.png, q373_pre7.png

**Spiegazione:** Q373 · June 30, 2026 582/951

---

## Domanda 374
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription named Sub1. You plan to deploy a multi-tiered application that will contain the tiers shown in the following table. You need to recommend a networking solution to meet the following requirements: Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines. Protect the web servers from SQL injection attacks. Which Azure resource should you recommend for each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines -> an internal load balancer | Protect the web servers from SQL injection attacks -> an application gateway that uses the WAF tier
> Immagini: q374_post0.png

**Spiegazione:** 583/951 Box 1: an internal load balancer Azure Internal Load Balancer (ILB) provides network load balancing between virtual machines that reside inside a cloud service or a virtual network with a regional scope. Box 2: an application gateway that uses the WAF tier Azure Web Application Firewall (WAF) on Azure Application Gateway provides centralized protection of your web applications from common exploits and vulnerabilities. Web applications are increasingly targeted by malicious attacks that exploit commonly known vulnerabilities. Reference: https://docs.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview Q374 · June 30, 2026 584/951

---

## Domanda 375
*Tipo: multiple_choice · fonte: text_layer*

Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter. You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered. You need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters. What should you create?

- **A.** three Azure Application Gateways and one On-premises data gateway
- **B.** three virtual hubs and one virtual WAN **← CORRETTA**
- **C.** three virtual WANs and one virtual hub
- **D.** three On-premises data gateways and one Azure Application Gateway

**Risposta corretta:** B

**Spiegazione:** To connect the datacenters in Miami, Los Angeles, and New York to the Azure subscription and minimize network latency, you should create three virtual hubs and one virtual WAN. A virtual WAN provides a centralized management point and optimized routing across regions, while virtual hubs in each region ensure there is a local connection point for each datacenter, thereby reducing latency. Multiple virtual hubs can be created within a single virtual WAN, which allows for efficient and low- latency communication between the datacenters and Azure regions. Q375 · June 30, 2026 585/951

---

## Domanda 376
*Tipo: hotspot · fonte: manual_vision*

You plan to deploy five virtual machines to a virtual network subnet. Each virtual machine will have a public IP address and a private IP address. Each virtual machine requires the same inbound and outbound security rules. What is the minimum number of network interfaces and network security groups that you require? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Minimum number of network interfaces -> 5 | Minimum number of network security groups -> 1
> Immagini: q376_post0.png

**Spiegazione:** Box 1: 5 - A public and a private IP address can be assigned to a single network interface. Box 2: 1 - You can associate zero, or one, network security group to each virtual network subnet and network interface in a virtual machine. The same network security group can be associated to as many subnets and network interfaces as you choose. 586/951 Reference: https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface-addresses Q376 · June 30, 2026 587/951

---

## Domanda 377
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. LB1 is configured as shown in the following table. You plan to create new inbound NAT rules that meet the following requirements: Provide Remote Desktop access to VM1 from the internet by using port 3389. Provide Remote Desktop access to VM2 from the internet by using port 3389. What should you create on LB1 before you can create the new inbound NAT rules?

- **A.** a frontend IP address **← CORRETTA**
- **B.** a load balancing rule
- **C.** a health probe 588/951
- **D.** a backend pool

**Risposta corretta:** A
> Esibito: q377_pre0.png, q377_pre1.png

**Spiegazione:** An inbound NAT rule requires a frontend IP configuration to be able to forward traffic to the backend virtual machines. The frontend IP address acts as the endpoint for the inbound traffic. In this scenario, you need a frontend IP address to create the new inbound NAT rules that will allow Remote Desktop access to VM1 and VM2 using port 3389 from the internet. Q377 · June 30, 2026 589/951

---

## Domanda 378
*Tipo: hotspot · fonte: manual_vision*

You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table. You create a private Azure DNS zone named adatum.com. You configure the adatum.com zone to allow auto registration from VNET1. Which A records will be added to the adatum.com zone for each virtual machine? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** A records for VM1 -> Private IP address only | A records for VM2 -> Private IP address only
> Immagini: q378_post0.png

**Spiegazione:** The virtual machines are registered (added) to the private zone as A records pointing to their private IP addresses. Reference: 590/951 https://docs.microsoft.com/en-us/azure/dns/private-dns-overview https://docs.microsoft.com/en- us/azure/dns/private-dns-scenarios Q378 · June 30, 2026 591/951

---

## Domanda 379
*Tipo: hotspot · fonte: manual_vision*

You have an Azure virtual network named VNet1 that connects to your on-premises network by using a site-to-site VPN. VNet1 contains one subnet namedSunet1. Subnet1 is associated to a network security group (NSG) named NSG1. Subnet1 contains a basic internal load balancer named ILB1. ILB1 has three Azure virtual machines in the backend pool. You need to collect data about the IP addresses that connects to ILB1. You must be able to run interactive queries from the Azure portal against the collected data. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Resource to create -> An Azure Log Analytics workspace | Resource on which to enable diagnostics -> NSG1
> Immagini: q379_post0.png

**Spiegazione:** 592/951 Q379 · June 30, 2026 593/951

---

## Domanda 380
*Tipo: multiple_choice · fonte: text_layer*

You have the Azure virtual networks shown in the following table. To which virtual networks can you establish a peering connection from VNet1?

- **A.** VNet2 andVNet3 only
- **B.** VNet2 only
- **C.** VNet3 and VNet4 only **← CORRETTA**
- **D.** VNet2, VNet3, and VNet4

**Risposta corretta:** C
> Esibito: q380_pre0.png

**Spiegazione:** To establish a peering connection between virtual networks in Azure, the address spaces of the virtual networks must not overlap. VNet1 has an address space of 10.11.0.0/16. VNet2 has an address space of 10.11.0.0/17, which overlaps with VNet1's address space, making peering between VNet1 and VNet2 impossible. VNet3, with an address space of 10.10.0.0/22, and VNet4, with an address space of 192.168.16.0/22, do not overlap with VNet1's address space. Therefore, VNet1 can establish peering connections with VNet3 and VNet4, but not with VNet2. Q380 · June 30, 2026 594/951

---

## Domanda 381
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Production. The NVA subnet contains two network virtual appliances (NVAs) that will perform network traffic inspection between the Perimeter subnet and the Production subnet. You need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements: The NVAs must run in an active-active configuration that uses automatic failover. The load balancer must load balance traffic to two services on the Production subnet. The services have different IP addresses. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Deploy a basic load balancer
- **B.** Deploy a standard load balancer **← CORRETTA**
- **C.** Add two load balancing rules that have HA Ports and Floating IP enabled **← CORRETTA**
- **D.** Add two load balancing rules that have HA Ports enabled and Floating IP disabled
- **E.** Add a frontend IP configuration, a backend pool, and a health probe
- **F.** Add a frontend IP configuration, two backend pools, and a health probe **← CORRETTA**

**Risposta corretta:** B, C, F

**Spiegazione:** A standard load balancer is required as it supports HA Ports and the advanced configurations necessary for high availability and automatic failover. Two load balancing rules with HA Ports and Floating IP enabled are necessary to allow both NVAs to be in an active-active configuration, 595/951 ensuring seamless redundancy. Finally, a frontend IP configuration is needed to direct incoming traffic, along with two backend pools to manage the two services with different IP addresses in the Production subnet, and a health probe to monitor the NVAs. This setup will ensure the load balancer properly balances traffic to the NVAs and between the services, meeting all the requirements stated. Q381 · June 30, 2026 596/951

---

## Domanda 382
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1. On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1. You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2. You need to ensure that you can connect Client1 to VNet2. What should you do?

- **A.** Download and re-install the VPN client configuration package on Client1.
- **B.** Select Allow gateway transit on VNet1. **← CORRETTA**
- **C.** Select Allow gateway transit on VNet2.
- **D.** Enable BGP on VPNGW1

**Risposta corretta:** B

**Spiegazione:** Client1 is unable to connect to VNet2 because VNet2 does not have a gateway of its own, and the VPN gateway in VNet1 is not being utilized to route the traffic to VNet2. To ensure Client1 can connect to VNet2, you need to enable gateway transit on VNet1. This allows VNet1 to use its VPN gateway to send and receive traffic from VNet2. Q382 · June 30, 2026 597/951

---

## Domanda 383
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table. You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com. You create a virtual network link for contoso.com as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. 598/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** When VM1 starts, a record for VM1 is added to the contoso.com DNS zone. -> Yes | When VM2 starts, a record for VM2 is added to the contoso.com DNS zone. -> Yes | When VM3 starts, a record for VM3 is added to the adatum.com DNS zone. -> No
> Immagini: q383_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-name-resolution-for-vms- and-role-instances https://docs.microsoft.com/en-us/azure/dns/private-dns-autoregistration Q383 · June 30, 2026 599/951

---

## Domanda 384
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources in the following table. To which subnets can you apply NSG1?

- **A.** the subnets on VNet1 only
- **B.** the subnets on VNet2 and VNet3 only
- **C.** the subnets on VNet2 only
- **D.** the subnets on VNet3 only **← CORRETTA**
- **E.** the subnets on VNet1, VNet2, and VNet3

**Risposta corretta:** D
> Esibito: q384_pre0.png

**Spiegazione:** You can only apply NSG1 to subnets that are in the same Azure region as NSG1. In this case, NSG1 is in the East US region. According to the table, VNet3 is the only virtual network also in the East US region. Therefore, NSG1 can only be applied to the subnets on VNet3. Q384 · June 30, 2026 600/951

---

## Domanda 385
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains two virtual networks named VNet1 and VNet2. Virtual machines connect to the virtual networks. The virtual networks have the address spaces and the subnets configured as shown in the following table. You need to add the address space of 10.33.0.0/16 to VNet1. The solution must ensure that the hosts on VNet1 and VNet2 can communicate. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Remove peering between VNet1 and VNet2. -> 2. Add the 10.33.0.0/16 address space to VNet1. -> 3. Recreate peering between VNet1 and VNet2.
> Immagini: q385_post0.png

**Spiegazione:** 601/951 Step 1: Remove peering between Vnet1 and VNet2. You can't add address ranges to, or delete address ranges from a virtual network's address space once a virtual network is peered with another virtual network. To add or remove address ranges, delete the peering, add or remove the address ranges, then re- create the peering. Step 2: Add the 10.44.0.0/16 address space to VNet1. Step 3: Recreate peering between VNet1 and VNet2 Reference: https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering Q385 · June 30, 2026 602/951

---

## Domanda 386
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resource groups shown in the following table. RG1 contains the resources shown in the following table. VM1 is running and connects to NIC1 and Disk1. NIC1 connects to VNET1. RG2 contains a public IP address named IP2 that is in the East US location. IP2 is not assigned to a virtual machine. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 603/951

**Risposta corretta:** You can move storage1 to RG2. -> Yes | You can move NIC1 to RG2. -> Yes | If you move IP2 to RG1, the location of IP2 will change. -> No
> Immagini: q386_post0.png

**Spiegazione:** Q386 · June 30, 2026 604/951

---

## Domanda 387
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure web app named webapp1. You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1. You need to ensure that webapp1 can access the data hosted on VM1. What should you do?

- **A.** Deploy an internal load balancer
- **B.** Peer VNET1 to another virtual network
- **C.** Connect webapp1 to VNET1 **← CORRETTA**
- **D.** Deploy an Azure Application Gateway

**Risposta corretta:** C

**Spiegazione:** Connecting webapp1 to VNET1 will allow the web app to access the resources within the virtual network, including the MySQL database on VM1. The App Service virtual network integration feature enables Azure web apps to access resources within a VNet. Deploying an internal load balancer, peering VNET1 to another network, or using an Azure Application Gateway are unnecessary and less direct solutions for ensuring that the web app can access the data on VM1. Q387 · June 30, 2026 605/951

---

## Domanda 388
*Tipo: multiple_choice · fonte: text_layer*

You create an Azure VM named VM1 that runs Windows Server 2019. VM1 is configured as shown in the exhibit. (Click the Exhibit tab.) You need to enable Desired State Configuration for VM1. What should you do first?

- **A.** Connect to VM1.
- **B.** Start VM1. 606/951 **← CORRETTA**
- **C.** Capture a snapshot of VM1.
- **D.** Configure a DNS name for VM1.

**Risposta corretta:** B
> Esibito: q388_pre0.png

**Spiegazione:** The VM is currently in a 'Stopped (deallocated)' state. In order to enable Desired State Configuration (DSC) for VM1, the virtual machine must be running. DSC extensions require communication with Azure, and this can only occur when the VM is active. Therefore, the first step would be to start VM1. Q388 · June 30, 2026 607/951

---

## Domanda 389
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Disabled
- **B.** Session persistence to None
- **C.** Floating IP (direct server return) to Enabled
- **D.** Session persistence to Client IP **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you need to configure session persistence. By setting session persistence to Client IP, successive requests from the same client IP address will be handled by the same virtual machine. This setting ensures that the client continues to communicate with the same server, maintaining a consistent session. Q389 · June 30, 2026 608/951

---

## Domanda 390
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following resources: A virtual network that has a subnet named Subnet1 Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1 A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections NSG-Subnet1 has the default inbound security rules only. NSG-VM1 has the default inbound security rules and the following custom inbound security rule: Priority: 100 Source: Any Source port range: * Destination: * Destination port range: 3389 Protocol: UDP Action: Allow VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1. You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the Any source to the *destination for port range 3389 and uses the TCP protocol. You remove NSG-VM1 from the network interface of VM1. Does this meet the goal?

- **A.** Yes 609/951 **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To allow Remote Desktop connections (which use TCP port 3389) from the internet to VM1, you need to ensure that there is an NSG rule allowing incoming TCP connections on port 3389. By adding an appropriate inbound rule to NSG-Subnet1 that allows TCP traffic on port 3389 from any source and removing NSG-VM1 (which had a rule using the incorrectly specified UDP protocol), the objective is met. Therefore, the given solution is valid because it ensures that the necessary TCP traffic for Remote Desktop connections can reach VM1. Q390 · June 30, 2026 610/951

---

## Domanda 391
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following resources: A virtual network that has a subnet named Subnet1 Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1 A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections NSG-Subnet1 has the default inbound security rules only. NSG-VM1 has the default inbound security rules and the following custom inbound security rule: Priority: 100 Source: Any Source port range: * Destination: * Destination port range: 3389 Protocol: UDP - Action: Allow VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1. You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the UDP protocol. Does this meet the goal? 611/951

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q391_pre0.png

**Spiegazione:** The correct answer is No. Remote Desktop Protocol (RDP) uses TCP, not UDP. The default port for RDP is TCP port 3389. For Remote Desktop connections from the internet to be established with VM1, the inbound security rule must allow TCP traffic on port 3389, not UDP. Therefore, adding an inbound security rule to NSG-Subnet1 that allows connections using the UDP protocol does not meet the goal. Q391 · June 30, 2026 612/951

---

## Domanda 392
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following resources: A virtual network that has a subnet named Subnet1 Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1 A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections NSG-Subnet1 has the default inbound security rules only. NSG-VM1 has the default inbound security rules and the following custom inbound security rule: Priority: 100 Source: Any Source port range: * Destination: * Destination port range: 3389 Protocol: UDP Action: Allow VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1. You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 and NSG-VM1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the TCP protocol. Does this meet the goal?

- **A.** Yes 613/951
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The goal is to establish Remote Desktop connections from the internet to VM1, which uses TCP port 3389. The existing inbound security rule in NSG-VM1 allows only UDP traffic on port 3389. Therefore, adding an additional inbound rule for TCP on port 3389 is necessary. However, the solution proposes adding these rules to both NSG-VM1 and NSG-Subnet1, but since NSG-VM1 already has an inbound rule for UDP, it will not affect the TCP traffic. The correct approach should be to simply add an inbound rule for TCP on port 3389 in NSG-VM1 without the necessity of altering NSG-Subnet1. Thus, the proposed solution does not meet the goal. Q392 · June 30, 2026 614/951

---

## Domanda 393
*Tipo: hotspot · fonte: manual_vision*

You have a virtual network named VNet1 that has the configuration shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. Note: Each correct selection is worth one point. 615/951

**Risposta corretta:** Before a virtual machine on VNet1 can receive an IP address from 192.168.1.0/24, you must first -> add an address space | Before a virtual machine on VNet1 can receive an IP address from 10.2.1.0/24, you must first -> add a subnet
> Immagini: q393_post0.png

**Spiegazione:** Q393 · June 30, 2026 616/951

---

## Domanda 394
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains the subnets shown in the following table. Each virtual machine uses a static IP address. You need to create network security groups (NSGs) to meet following requirements: Allow web requests from the internet to VM3, VM4, VM5, and VM6. Allow all connections between VM1 and VM2. Allow Remote Desktop connections to VM1. Prevent all other network traffic to VNET1. What is the minimum number of NSGs you should create?

- **A.** 1 **← CORRETTA**
- **B.** 3
- **C.** 4
- **D.** 12

**Risposta corretta:** A
> Esibito: q394_pre0.png

**Spiegazione:** To meet the specified requirements, the minimum number of NSGs needed is one. This is because NSGs can be associated with multiple subnets, NICs, or VMs. You can create one NSG with rules to allow web requests to static IP addresses of VM3, VM4, VM5, and VM6, allow RDP to the static IP address of VM1, and have an implicit deny rule at the end to prevent all other traffic. This single NSG can then be applied to the entire VNET1, thereby satisfying all the requirements. 617/951 Q394 · June 30, 2026 618/951

---

## Domanda 395
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. The Not allowed resource types Azure policy that has policy enforcement enabled is assigned to RG1 and uses the following parameters: Microsoft.Network/virtualNetworksMicrosoft.Compute/virtualMachines In RG1, you need to create a new virtual machine named VM2, and then connect VM2 to VNET1. What should you do first?

- **A.** Remove Microsoft.Compute/virtualMachines from the policy. **← CORRETTA**
- **B.** Create an Azure Resource Manager template
- **C.** Add a subnet to VNET1.
- **D.** Remove Microsoft.Network/virtualNetworks from the policy.

**Risposta corretta:** A
> Esibito: q395_pre0.png

**Spiegazione:** The Not allowed resource types Azure policy with policy enforcement enabled specifies which resource types are blocked from being deployed in a specific resource group. In this case, both virtual networks and virtual machines are blocked in RG1. To create a new virtual machine in RG1, you must first remove the restriction that blocks the deployment of virtual machines. Therefore, removing Microsoft.Compute/virtualMachines from the policy is the necessary step to allow the creation of the new virtual machine. Q395 · June 30, 2026 619/951

---

## Domanda 396
*Tipo: multiple_choice · fonte: text_layer*

Your company has an Azure subscription named Subscription1. The company also has two on-premises servers named Server1 and Server2 that run Windows Server 2016. Server1 is configured as a DNS server that has a primary DNS zone named adatum.com. Adatum.com contains 1,000 DNS records. You manage Server1 and Subscription1 from Server2. Server2 has the following tools installed: The DNS Manager console Azure PowerShell Azure CLI 2.0 You need to move the adatum.com zone to an Azure DNS zone in Subscription1. The solution must minimize administrative effort. What should you use?

- **A.** Azure CLI **← CORRETTA**
- **B.** Azure PowerShell
- **C.** the Azure portal
- **D.** the DNS Manager console

**Risposta corretta:** A

**Spiegazione:** To move an on-premises DNS zone to Azure DNS, the Azure CLI provides the necessary capabilities to import the DNS zone file efficiently. You can use the 'az network dns zone import' command to 620/951 import the zone file directly into Azure DNS. This method is supported and simplifies the process, meeting the requirement to minimize administrative effort. Q396 · June 30, 2026

---

## Domanda 397
*Tipo: multiple_choice · fonte: text_layer*

You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3. You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only. What should you configure?

- **A.** an inbound NAT rule **← CORRETTA**
- **B.** a new public load balancer for VM3
- **C.** a frontend IP configuration
- **D.** a load balancing rule

**Risposta corretta:** A

**Spiegazione:** To direct all Remote Desktop Protocol (RDP) connections to a specific virtual machine (VM) within a set of VMs behind a load balancer, you need to configure an inbound NAT rule. An inbound NAT rule allows you to map an external port on the load balancer to an internal port on a specific VM. In this case, you would map the RDP port (3389) on the load balancer to port 3389 on VM3. This ensures that all RDP traffic is directed to VM3, regardless of the load balancing setup for other ports. Q397 · June 30, 2026 621/951

---

## Domanda 398
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription named Subscription1 that contains the virtual networks in the following table. Subscription1 contains the virtual machines in the following table. In Subscription1, you create a load balancer that has the following configurations: Name: LB1 SKU: Basic Type: Internal Subnet: Subnet12 Virtual network: VNET1 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 622/951

**Risposta corretta:** LB1 can balance the traffic between VM1 and VM2. -> Yes | LB1 can balance the traffic between VM3 and VM4. -> No | LB1 can balance the traffic between VM5 and VM6. -> No
> Immagini: q398_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-standard-overview Q398 · June 30, 2026 623/951

---

## Domanda 399
*Tipo: hotspot · fonte: manual_vision*

You have an Azure virtual machine that runs Windows Server 2019 and has the following configurations: Name: VM1 Location: West US Connected to: VNET1 Private IP address: 10.1.0.4 Public IP addresses: 52.186.85.63 DNS suffix in Windows Server: Adatum.com You create the Azure DNS zones shown in the following table. You need to identify which DNS zones you can link to VNET1 and the DNS zones to which VM1 can automatically register. Which zones should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 624/951

**Risposta corretta:** DNS zones that you can link to VNET1 -> The private zones only | DNS zones to which VM1 can automatically register -> The private zones only
> Immagini: q399_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/dns/private-dns-overview Q399 · June 30, 2026 625/951

---

## Domanda 400
*Tipo: drag_and_drop · fonte: manual_vision*

You have an on-premises network that you plan to connect to Azure by using a site-so-site VPN. In Azure, you have an Azure virtual network named VNet1 that uses an address space of 10.0.0.0/16 VNet1 contains a subnet named Subnet1 that uses an address space of 10.0.0.0/24. You need to create a site-to-site VPN to Azure. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. NOTE: More than one order of answer choice is correct. You will receive credit for any of the correct orders you select.

**Risposta corretta:** 1. Create a gateway subnet. -> 2. Create a VPN gateway. -> 3. Create a local gateway. -> 4. Create a VPN connection.
> Immagini: q400_post0.png

**Spiegazione:** 626/951 Q400 · June 30, 2026 627/951

---

## Domanda 401
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources in the following table. VM1 and VM2 are deployed from the same template and host line-of-business applications. You configure the network security group (NSG) shown in the exhibit. (Click the Exhibit tab.) You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80. What should you do?

- **A.** Disassociate the NSG from a network interface
- **B.** Change the Port_80 inbound security rule. 628/951
- **C.** Associate the NSG to Subnet1. **← CORRETTA**
- **D.** Change the DenyWebSites outbound security rule.

**Risposta corretta:** C
> Esibito: q401_pre0.png, q401_pre1.png

**Spiegazione:** To prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80, the NSG (Network Security Group) should be associated with Subnet1. The outbound security rule 'DenyWebSites' is already correctly set up to block outbound traffic on port 80. Since the NSG is currently not associated with any subnet or network interface as shown in the image, associating it with Subnet1 will enforce the rule to block the desired traffic. Q401 · June 30, 2026 629/951

---

## Domanda 402
*Tipo: multiple_choice · fonte: text_layer*

You have two subscriptions named Subscription1 and Subscription2. Each subscription is associated to a different Azure AD tenant. Subscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of 10.0.0.0/16. Subscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of 10.10.0.0/24. You need to connect VNet1 to VNet2. What should you do first?

- **A.** Move VM1 to Subscription2.
- **B.** Move VNet1 to Subscription2.
- **C.** Modify the IP address space of VNet2.
- **D.** Provision virtual network gateways. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To connect two virtual networks (VNets) that are in different Azure subscriptions, you need to provision virtual network gateways in each subscription. This creates a VPN (virtual private network) gateway in each VNet. Once these gateways are set up, you can then establish a secure connection between VNet1 and VNet2, effectively enabling communication between them. The IP address spaces of the VNets, in this case, do not overlap, so there's no need to modify them. Moving the virtual machines or the virtual networks themselves does not address the requirement of connecting the VNets, making provisioning virtual network gateways the correct initial step. Q402 · June 30, 2026 630/951

---

## Domanda 403
*Tipo: multiple_choice · fonte: text_layer*

You plan to create an Azure virtual machine named VM1 that will be configured as shown in the following exhibit. The planned disk configurations for VM1 are shown in the following exhibit. 631/951 You need to ensure that VM1 can be created in an Availability Zone. Which two settings should you modify? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Use managed disks **← CORRETTA**
- **B.** OS disk type
- **C.** Availability options **← CORRETTA**
- **D.** Size
- **E.** Image 632/951

**Risposta corretta:** A, C
> Esibito: q403_pre0.png, q403_pre1.png

**Spiegazione:** To ensure that VM1 can be created in an Availability Zone, you need to modify the settings for managed disks and availability options. Managed disks are required because they provide better reliability and advanced features, such as integration with availability zones. Additionally, you need to select the appropriate availability options to explicitly place the virtual machine in an availability zone for high availability and disaster recovery purposes. Q403 · June 30, 2026 633/951

---

## Domanda 404
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. VMSS1 is set to VM (virtual machines) orchestration mode. You need to deploy a new Azure virtual machine named VM1, and then add VM1 to VMSS1. Which resource group and location should you use to deploy VM1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Resource group -> RG1, RG2, or RG3 | Location -> West US only
> Immagini: q404_post0.png

**Spiegazione:** Box 1: RG1, RG2, or RG3 - The resource group stores metadata about the resources. When you specify a location for the resource group, you're specifying where that metadata is stored. 634/951 Box 2: West US only - Note: Virtual machine scale sets will support 2 distinct orchestration modes: ScaleSetVM ג€" Virtual machine instances added to the scale set are based on the scale set configuration model. The virtual machine instance lifecycle - creation, update, deletion - is managed by the scale set. VM (virtual machines) ג€" Virtual machines created outside of the scale set can be explicitly added to the scaleset. Reference: https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview Q404 · June 30, 2026 635/951

---

## Domanda 405
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3. Peering for VNET1 is configured as shown in the following exhibit. Peering for VNET2 is configured as shown in the following exhibit. Peering for VNET3 is configured as shown in the following exhibit. 636/951 How can packets be routed between the virtual networks? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Packets from VNET1 can be routed to -> VNET2 and VNET3 | Packets from VNET2 can be routed to -> VNET1 only
> Immagini: q405_post0.png

**Spiegazione:** Box 1. VNET2 and VNET3 - Box 2: VNET1 - Gateway transit is disabled. Reference: https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview 637/951 Q405 · June 30, 2026 638/951

---

## Domanda 406
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You modify the Azure Active Directory (Azure AD) authentication policies. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To establish a point-to-site VPN connection to an Azure virtual network (VNet1) from Computer2, you need the client certificate that was used on Computer1. This certificate is essential because it is used for client authentication. Modifying Azure Active Directory (Azure AD) authentication policies will not address the requirement of having the client certificate installed on Computer2. The correct solution involves exporting the client certificate from Computer1 and installing it on Computer2. Without the client certificate, Computer2 will not be able to authenticate and establish the VPN connection to VNet1. Q406 · June 30, 2026 639/951

---

## Domanda 407
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You join Computer2 to Azure Active Directory (Azure AD). Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To establish a point-to-site VPN connection to an Azure virtual network from a client computer, it is necessary for the client computer to have a client certificate installed that authenticates the connection. Simply joining Computer2 to Azure Active Directory does not fulfill this requirement. Therefore, the proposed solution of joining Computer2 to Azure Active Directory does not meet the goal. Instead, the correct approach would involve exporting the client certificate from Computer1 and installing it on Computer2 to establish the VPN connection. Q407 · June 30, 2026 640/951

---

## Domanda 408
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.Another administrator plans to create several network security groups (NSGs) in the subscription.You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.Solution: You create a resource lock, and then you assign the lock to the subscription.Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Creating a resource lock and assigning it to the subscription will not meet the goal of automatically blocking TCP port 8080 between virtual networks when an NSG is created. Resource locks are used to prevent accidental deletion or modification of Azure resources, but they do not affect the configuration or behavior of resources such as NSGs. To achieve the goal, a custom Azure Policy should be created to enforce a security rule that blocks TCP port 8080. This policy can then be assigned at the subscription level to ensure it applies to all NSGs created within that subscription. Q408 · June 30, 2026 641/951

---

## Domanda 409
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1. You have a computer named Computer1 that runs Windows 10. Computer1 is connected to the Internet. You add a network interface named vm1173 to VM1 as shown in the exhibit. (Click the Exhibit tab.) From Computer1, you attempt to connect to VM1 by using Remote Desktop, but the connection fails. You need to establish a Remote Desktop connection to VM1. What should you do first?

- **A.** Change the priority of the RDP rule
- **B.** Attach a network interface
- **C.** Delete the DenyAllInBound rule 642/951
- **D.** Start VM1 **← CORRETTA**

**Risposta corretta:** D
> Esibito: q409_pre0.png

**Spiegazione:** When troubleshooting a remote connection issue to a virtual machine in Azure, one of the first steps is to ensure that the virtual machine is actually running. If VM1 is not started, no connection can be made, regardless of the network settings or rules in place. The rule priorities and network interface settings shown in the exhibit indicate that the necessary settings for RDP are configured correctly, but without the VM being in a running state, these configurations won't be effective. Therefore, starting VM1 is the logical first step to establishing a Remote Desktop connection. Q409 · June 30, 2026 643/951

---

## Domanda 410
*Tipo: multiple_choice · fonte: text_layer*

You have the Azure virtual machines shown in the following table. A DNS service is installed on VM1. You configure the DNS servers settings for each virtual network as shown in the following exhibit. You need to ensure that all the virtual machines can resolve DNS names by using the DNS service on VM1. What should you do?

- **A.** Configure a conditional forwarder on VM1
- **B.** Add service endpoints on VNET1
- **C.** Add service endpoints on VNET2 and VNET3 644/951
- **D.** Configure peering between VNET1, VNET2, and VNET3 **← CORRETTA**

**Risposta corretta:** D
> Esibito: q410_pre0.png, q410_pre1.png

**Spiegazione:** To ensure that all virtual machines can resolve DNS names using the DNS service on VM1, you must enable connectivity between the virtual networks (VNETs) to allow VMs in different VNETs to communicate with VM1. Virtual network peering is the correct solution for this as it allows different VNETs to communicate with each other, thereby enabling VM2, VM3, and VM4 to access VM1's DNS service. Conditional forwarders, service endpoints, and other configurations alone do not establish the required connectivity between the networks. Q410 · June 30, 2026 645/951

---

## Domanda 411
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the Azure virtual machines shown in the following table. You add inbound security rules to a network security group (NSG) named NSG1 as shown in the following table. You run Azure Network Watcher as shown in the following exhibit. 646/951 You run Network Watcher again as shown in the following exhibit. 647/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 648/951

**Risposta corretta:** NSG1 limits VM1 traffic -> No | NSG1 applies to VM2 -> Yes | VM1 and VM2 connect to the same virtual network -> Yes
> Immagini: q411_post0.png

**Spiegazione:** Q411 · June 30, 2026 649/951

---

## Domanda 412
*Tipo: multiple_choice · fonte: text_layer*

You have the Azure virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. Each virtual machine has a public IP address. The virtual machines host several applications that are accessible over port 443 to users on the Internet. Your on-premises network has a site-to-site VPN connection to VNet1. You discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises network. You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all the applications can still be accessed by the Internet users. What should you do?

- **A.** Modify the address space of the local network gateway
- **B.** Create a deny rule in a network security group (NSG) that is linked to Subnet1 **← CORRETTA**
- **C.** Remove the public IP addresses from the virtual machines
- **D.** Modify the address space of Subnet1

**Risposta corretta:** B

**Spiegazione:** To prevent RDP access to the virtual machines from the Internet while allowing access from the on- premises network, you should create a deny rule in a network security group (NSG) that is linked to Subnet1. This rule will block RDP traffic from the Internet while permitting it from the on-premises network through the site-to-site VPN connection. Removing the public IP addresses from the virtual machines would also block the applications that need to be accessible to users over the Internet, so that is not a viable solution. Modifying the address spaces of the local network gateway or Subnet1 would not address the requirement either. 650/951 Q412 · June 30, 2026 651/951

---

## Domanda 413
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources in the following table. Subnet1 is associated to VNet1. NIC1 attaches VM1 to Subnet1. You need to apply ASG1 to VM1. What should you do?

- **A.** Associate NIC1 to ASG1 **← CORRETTA**
- **B.** Modify the properties of ASG1
- **C.** Modify the properties of NSG1

**Risposta corretta:** A
> Esibito: q413_pre0.png

**Spiegazione:** To apply an Application Security Group (ASG) to a Virtual Machine (VM) in Azure, you need to connect its Network Interface Card (NIC) to the ASG. This is because an ASG groups NICs logically, and whenever you need to apply security rules to a set of VMs, you do it through their NICs by associating them to the ASG. The other options provided involve modifying properties of the ASG or Network Security Group (NSG), which would not accomplish the task of applying the ASG to the VM. Q413 · June 30, 2026 652/951

---

## Domanda 414
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains an Azure virtual network named VNet1. VNet1 connects to your on-premises network by using Azure ExpressRoute. You plan to prepare the environment for automatic failover in case of ExpressRoute failure. You need to connect VNet1 to the on-premises network by using a site-to-site VPN. The solution must minimize cost. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Create a connection **← CORRETTA**
- **B.** Create a local site VPN gateway **← CORRETTA**
- **C.** Create a VPN gateway that uses the VpnGw1 SKU **← CORRETTA**
- **D.** Create a gateway subnet
- **E.** Create a VPN gateway that uses the Basic SKU

**Risposta corretta:** A, B, C

**Spiegazione:** To connect VNet1 to the on-premises network using a site-to-site VPN while minimizing cost, you need to perform the following actions: Create a local site VPN gateway, as it represents the on- premises VPN device and is essential for establishing the connection; create a VPN gateway that uses the VpnGw1 SKU, as the Basic SKU cannot coexist with an ExpressRoute connection and the VpnGw1 SKU provides the necessary functionality for reliable failover; and finally, create a connection to establish the link between your virtual network and the on-premises network. The gateway subnet can be assumed to already exist due to the existing ExpressRoute connection. 653/951 Q414 · June 30, 2026 654/951

---

## Domanda 415
*Tipo: hotspot · fonte: manual_vision*

You have peering configured as shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Hosts on vNET6 can communicate with hosts on [answer choice]. -> vNET6 only | To change the status of the peering connection to vNET1 to Connected, you must first [answer choice]. -> delete peering1
> Immagini: q415_post0.png

**Spiegazione:** Box 1: vNET6 only - Peering status to both VNet1 and Vnet2 are disconnected. 655/951 Box 2: delete peering1 - Peering to Vnet1 is Enabled but disconnected. We need to update or re-create the remote peering to get it back to Initiated state. Reference: https://blog.kloud.com.au/2018/10/19/address-space-maintenance-with-vnet-peering/ Q415 · June 30, 2026 656/951

---

## Domanda 416
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resources in the following table. You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1. LB1 is configured as shown in the LB1 exhibit. (Click the LB1 tab.) Rule1 is configured as shown in the Rule1 exhibit. (Click the Rule1 tab.) 657/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 658/951

**Risposta corretta:** VM1 is in the same availability set as VM2. -> Yes | If Probe1.htm is present on VM1 and VM2, LB1 will balance TCP port 80 between VM1 and VM2. -> Yes | If you delete Rule1, LB1 will balance all the requests between VM1 and VM2 for all the ports. -> No
> Immagini: q416_post0.png

**Spiegazione:** Box 1: Yes - A Basic Load Balancer supports virtual machines in a single availability set or virtual machine scale set. Box 2: Yes - When using load-balancing rules with Azure Load Balancer, you need to specify health probes to allow Load Balancer to detect the backend endpoint status. The configuration of the health probe and probe responses determine which backend pool instances will receive new flows. You can use health probes to detect the failure of an application on a backend endpoint. You can also generate a custom response to a health probe and use the health probe for flow control to manage load or planned downtime. When a health probe fails, Load Balancer will stop sending new flows to the respective unhealthy instance. Outbound connectivity is not impacted, only inbound connectivity is impacted. Box 3: No - Reference: https://docs.microsoft.com/en-us/azure/load-balancer/skus https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview 659/951 Q416 · June 30, 2026 660/951

---

## Domanda 417
*Tipo: hotspot · fonte: manual_vision*

You have an Azure virtual machine named VM1 that connects to a virtual network named VNet1. VM1 has the following configurations: Subnet: 10.0.0.0/24 Availability set: AVSet Network security group (NSG): None Private IP address: 10.0.0.4 (dynamic) Public IP address: 40.90.219.6 (dynamic) You deploy a standard, Internet-facing load balancer named slb1. You need to configure slb1 to allow connectivity to VM1. Which changes should you apply to VM1 as you configure slb1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Before you create a backend pool on slb1, you must -> Remove the public IP address from VM1 | Before you can connect to VM1 from slb1, you must -> Create and configure an NSG
> Immagini: q417_post0.png

**Spiegazione:** Change the private IP address of VM1 to static Box 1: Remove the public IP address from VM1 Note: A public load balancer can provide outbound connections for virtual machines (VMs) inside your virtual network. These connections are accomplished by translating their private IP addresses to public IP addresses. Public Load Balancers are used to load balance internet traffic to your VMs. 661/951 Box 2: Create and configure an NSG NSGs are used to explicitly permit allowed traffic. If you do not have an NSG on a subnet or NIC of your virtual machine resource, traffic is not allowed to reach this resource. Reference: https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview Q417 · June 30, 2026 662/951

---

## Domanda 418
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to create a network interface named NIC1. In which location can you create NIC1?

- **A.** East US and North Europe only
- **B.** East US only **← CORRETTA**
- **C.** East US, West Europe, and North Europe
- **D.** East US and West Europe only

**Risposta corretta:** B
> Esibito: q418_pre0.png

**Spiegazione:** Before creating a network interface (NIC), you must have an existing virtual network (VNET) in the same location where the NIC is to be created. In this scenario, the only virtual network available is VNET1, which is located in East US. Therefore, you can only create the NIC in the East US location. Q418 · June 30, 2026 663/951

---

## Domanda 419
*Tipo: multiple_choice · fonte: text_layer*

You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table. You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com. For controso.com, you create a virtual network link named link1 as shown in the exhibit. (Click the Exhibit tab.) You discover that VM1 can resolve names in contoso.com but cannot resolve names in adatum.com. VM1 can resolve other hosts on the Internet. 664/951 You need to ensure that VM1 can resolve host names in adatum.com.What should you do?

- **A.** Update the DNS suffix on VM1 to be adatum.com
- **B.** Configure the name servers for adatum.com at the domain registrar **← CORRETTA**
- **C.** Create an SRV record in the contoso.com zone
- **D.** Modify the Access control (IAM) settings for link1

**Risposta corretta:** B
> Esibito: q419_pre0.png, q419_pre1.png

**Spiegazione:** To ensure that VM1 can resolve host names in adatum.com, you need to configure the name servers for adatum.com at the domain registrar. This step is crucial because adatum.com is a public Azure DNS zone, and configuring the name servers tells the Internet top-level domain DNS servers where to direct DNS queries for adatum.com. Simply updating the DNS suffix on VM1 or modifying settings within the Azure environment will not suffice, as these actions do not inform the global DNS infrastructure about the location of the adatum.com records. Q419 · June 30, 2026 665/951

---

## Domanda 420
*Tipo: hotspot · fonte: manual_vision*

You plan to use Azure Network Watcher to perform the following tasks: ✑ Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine. ✑ Task2: Validate outbound connectivity from an Azure virtual machine to an external host. Which feature should you use for each task? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Task1 -> IP flow verify | Task2 -> Connection troubleshoot
> Immagini: q420_post0.png

**Spiegazione:** Box 1: IP flow verify - At some point, a VM may become unable to communicate with other resources, because of a security rule. The IP flow verify capability enables you to specify a source and destination IPv4 address, port, protocol (TCP or UDP), and traffic direction (inbound or outbound). IP flow verify then tests the communication and informs you if the connection succeeds or fails. If the connection fails, IP flow verify tells you which. 666/951 Box 2: Connection troubleshoot - Diagnose outbound connections from a VM: The connection troubleshoot capability enables you to test a connection between a VM and another VM, an FQDN, a URI, or an IPv4 address. The test returns similar information returned when using the connection monitor capability, but tests the connection at a point in time, rather than monitoring it over time, as connection monitor does. Learn more about how to troubleshoot connections using connection- troubleshoot. Reference: https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview Q420 · June 30, 2026 667/951

---

## Domanda 421
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the Azure virtual machines shown in the following table. You configure the network interfaces of the virtual machines to use the settings shown in the following table. From the settings of VNET1 you configure the DNS servers shown in the following exhibit. The virtual machines can successfully connect to the DNS server that has an IP address of 192.168.10.15 and the DNS server that has an IP address of 193.77.134.10. For each of the following statements, select Yes if the statement is true. Otherwise, select No. 668/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** VM1 connects to 193.77.134.10 for DNS queries. -> Yes | VM2 connects to 193.77.134.10 for DNS queries. -> No | VM3 connects to 192.168.10.15 for DNS queries. -> Yes
> Immagini: q421_post0.png

**Spiegazione:** Box 1: Yes - You can specify DNS server IP addresses in the VNet settings. The setting is applied as the default DNS server(s) for all VMs in the VNet. Box 2: No - You can set DNS servers per VM or cloud service to override the default network settings. Box 3: Yes - You can set DNS servers per VM or cloud service to override the default network settings. Reference: https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-faq#name-resolution-dns Q421 · June 30, 2026 669/951

---

## Domanda 422
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the resource groups shown in the following table. RG1 contains the resources shown in the following table. You need to identify which resources you can move from RG1 to RG2, and which resources you can move from RG2 to RG1. Which resources should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 670/951

**Risposta corretta:** Resources that you can move from RG1 to RG2 -> IP1, VNET2, and storage1 | Resources that you can move from RG2 to RG1 -> IP2, VNET2, and storage2
> Immagini: q422_post0.png

**Spiegazione:** Q422 · June 30, 2026 671/951

---

## Domanda 423
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the virtual machines shown in the following table. You deploy a load balancer that has the following configurations: Name: LB1 Type: Internal SKU: Standard Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q423_pre0.png

**Spiegazione:** To add virtual machines to the backend pool of an internal load balancer with a Standard SKU in Azure, the VMs must either have no public IP or a Standard SKU public IP. Creating a Basic SKU 672/951 public IP address for VM1 does not meet this requirement; thus, the solution would not work. Therefore, the correct answer is no. Q423 · June 30, 2026 673/951

---

## Domanda 424
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the virtual machines shown in the following table. You deploy a load balancer that has the following configurations: NOT Name: LB1 NOT Type: Internal NOT SKU: Standard NOT Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q424_pre0.png

**Spiegazione:** To add virtual machines to the backend pool of a Standard SKU load balancer, both VMs must have either a Standard SKU public IP or no public IP at all. In the given scenario, VM1 currently does not have any public IP, and VM2 has a Basic SKU public IP. By creating a Standard SKU public IP and 674/951 associating it with VM1, you meet the criteria for VM1. However, for VM2, having a Basic SKU public IP is not compliant with the Standard SKU load balancer requirements. Therefore, stopping VM2 will not change the fact that it still has a Basic SKU public IP, which makes the solution incorrect. Q424 · June 30, 2026 675/951

---

## Domanda 425
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the virtual machines shown in the following table. You deploy a load balancer that has the following configurations: Name: LB1 Type: Internal SKU: Standard Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q425_pre0.png

**Spiegazione:** The given solution of creating two Standard SKU public IP addresses and associating them with the network interfaces of each virtual machine does not meet the goal. Since LB1 is configured as an 676/951 internal load balancer, public IP addresses for the VMs are not required. Internal load balancers are used for traffic inside a virtual network, and the VMs only need to be in the same virtual network and subnet for the load balancer to work. Hence, associating standard SKU public IP addresses to VM1 and VM2 is unnecessary. Q425 · June 30, 2026 677/951

---

## Domanda 426
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You export the client certificate from Computer1 and install the certificate on Computer2. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** To establish a point-to-site VPN connection to an Azure virtual network from a different computer, you need to have the client certificate installed on that computer. In this scenario, you already have a point-to-site VPN connection from Computer1 using a self-signed certificate. To enable Computer2 to connect using the same point-to-site VPN, you need to export the client certificate from Computer1 and install it on Computer2. This ensures that Computer2 can authenticate successfully and establish the VPN connection to VNet1. Q426 · June 30, 2026 678/951

---

## Domanda 427
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine named VM1. The network interface for VM1 is configured as shown in the exhibit. (Click the Exhibit tab.) You deploy a web server on VM1, and then create a secure website that is accessible by using the HTTPS protocol. VM1 is used as a web server only. You need to ensure that users can connect to the website from the Internet. What should you do?

- **A.** Modify the protocol of Rule4
- **B.** Delete Rule1 679/951
- **C.** For Rule5, change the Action to Allow and change the priority to 401
- **D.** Create a new inbound rule that allows TCP protocol 443 and configure the rule to have a priority of 501. **← CORRETTA**

**Risposta corretta:** D
> Esibito: q427_pre0.png

**Spiegazione:** To ensure that users can connect to the website from the Internet using the HTTPS protocol, you need to allow inbound traffic on TCP port 443. The current security rules deny traffic on port 443 due to Rule2 at priority 500. Creating a new inbound rule that specifically allows TCP traffic on port 443 with a priority of 501 will not work because it will still be blocked by the higher priority Rule2. However, since no options suggest changing Rule2 directly, the best course of action is to create a new rule that explicitly allows inbound traffic on port 443 with a lower priority number than the existing Rule2. Therefore, creating a new inbound rule allowing TCP protocol 443 with a priority of 450 would be a valid solution, but since this option is not listed, creating the rule with a lower priority would be the closest correct answer. Q427 · June 30, 2026 680/951

---

## Domanda 428
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Unregistering the Microsoft.ClassicNetwork provider does not affect the creation of new network security groups (NSGs) or their default settings. To ensure that a specific rule, such as blocking TCP port 8080 between the virtual networks, is automatically applied to all newly created NSGs, you would need to use Azure Policy. Azure Policy allows you to define and enforce rules for resources in your subscription, including custom policies that dictate the configuration of NSGs. By using a custom policy definition, you can ensure that specific security rules are automatically applied to new NSGs. Q428 · June 30, 2026 681/951

---

## Domanda 429
*Tipo: hotspot_yes_no · fonte: manual_vision*

You manage two Azure subscriptions named Subscription1 and Subscription2. Subscription1 has following virtual networks: The virtual networks contain the following subnets: Subscription2 contains the following virtual network: Name: VNETA Address space: 10.10.128.0/17 Location: Canada Central VNETA contains the following subnets: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 682/951

**Risposta corretta:** A Site-to-Site connection can be established between VNET1 and VNET2. -> No | VNET1 and VNET2 can be peered. -> Yes | VNET1 and VNETA can be peered. -> Yes
> Immagini: q429_post0.png

**Spiegazione:** Q429 · June 30, 2026 683/951

---

## Domanda 430
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999. Does this meet the goal?

- **A.** Yes 684/951
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q430_pre0.png

**Spiegazione:** To ensure connections to App1 can be established successfully from 131.107.100.50 over TCP port 443, you must ensure that the security rules allow this specific traffic. The existing rules already include an Allow rule with priority 100 for this exact traffic (source: 131.107.100.50, destination: VirtualNetwork, port: 443, protocol: TCP). Creating an additional deny rule with priority 64999 would not help because it would still be overridden by the existing Allow rule with priority 100. The issue could be due to other factors such as the state of the virtual machine, the network configuration, or the presence of other higher priority rules. Creating a deny rule as proposed does not meet the goal of allowing the connection. Q430 · June 30, 2026 685/951

---

## Domanda 431
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You delete the BlockAllOther443 inbound security rule. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No 686/951

**Risposta corretta:** A
> Esibito: q431_pre0.png

**Spiegazione:** The issue arises because the 'BlockAllOther443' rule with priority 200 is blocking traffic on TCP port 443, despite the existence of an 'Allow_131.107.100.50' rule with priority 100 that should allow the traffic. By deleting the 'BlockAllOther443' rule, traffic from 131.107.100.50 on port 443 will no longer be blocked. Additionally, the 'AllowAzureLoadBalancerInbound' rule with priority 65001 will allow traffic from the Azure Load Balancer, resolving the issue. Thus, deleting the 'BlockAllOther443' rule will ensure that connections to App1 can be successfully established from 131.107.100.50 over TCP port 443. Q431 · June 30, 2026 687/951

---

## Domanda 432
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You modify the priority of the Allow_131.107.100.50 inbound security rule. Does this meet the goal?

- **A.** Yes
- **B.** No 688/951 **← CORRETTA**

**Risposta corretta:** B
> Esibito: q432_pre0.png

**Spiegazione:** The given solution proposes modifying the priority of the 'Allow_131.107.100.50' inbound security rule to resolve the issue, but this rule already has the highest priority of 100. Therefore, changing its priority would have no effect. The problem lies elsewhere in the network security group (NSG) rules configuration, likely due to another rule blocking the necessary traffic. Consequently, modifying the priority of the existing rule does not meet the goal of ensuring successful connections to App1 from 131.107.100.50 over TCP port 443. Q432 · June 30, 2026 689/951

---

## Domanda 433
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You assign a built-in policy definition to the subscription. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To ensure that any newly created network security group (NSG) automatically blocks TCP port 8080 between virtual networks, one would need a specific policy addressing this particular rule. Azure's built-in policy definitions might not cover this exact requirement. Therefore, creating a custom policy definition specifying the block on TCP port 8080 is necessary. Built-in policies cover more general scenarios and may not include every specific custom rule needed. Thus, simply assigning a built-in policy definition to the subscription is insufficient to meet the stated goal. Q433 · June 30, 2026 690/951

---

## Domanda 434
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You plan to deploy an Azure Kubernetes Service (AKS) cluster to support an app named App1. On- premises clients connect to App1 by using the IP address of the pod. For the AKS cluster, you need to choose a network type that will support App1. What should you choose?

- **A.** kubenet
- **B.** Azure Container Networking Interface (CNI) **← CORRETTA**
- **C.** Hybrid Connection endpoints
- **D.** Azure Private Link

**Risposta corretta:** B

**Spiegazione:** To support on-premises clients connecting to App1 using the IP address of the pod, the Azure Container Networking Interface (CNI) is the appropriate network type. This is because with Azure CNI, each pod gets its own IP address from the subnet and can be accessed directly, which suits the requirement of on-premises clients connecting via IP addresses. Other options such as kubenet use Network Address Translation (NAT) which complicates direct IP access to the pods, and the other options, Hybrid Connection endpoints and Azure Private Link, are not viable for this requirement. Q434 · June 30, 2026 691/951

---

## Domanda 435
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the virtual machines shown in the following table. You deploy a load balancer that has the following configurations: Name: LB1 Type: Internal SKU: Standard Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You disassociate the public IP address from the network interface of VM2. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A
> Esibito: q435_pre0.png

**Spiegazione:** To add virtual machines to the backend pool of an Azure load balancer with a Standard SKU, the VMs must either have a Standard SKU public IP or no public IP. In this scenario, disassociating the Basic SKU public IP from VM2 would make both VMs either have no public IP or a compatible Standard 692/951 SKU public IP. Therefore, disassociating the public IP address from the network interface of VM2 meets the goal of adding both VM1 and VM2 to the backend pool of the load balancer. Q435 · June 30, 2026 693/951

---

## Domanda 436
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You configure a custom policy definition, and then you assign the policy to the subscription. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** A custom policy definition in Azure Policy is primarily used to enforce organizational standards and assess compliance at-scale. However, it does not directly configure or manage network security groups (NSGs) to apply specific security rules. To ensure that a new NSG automatically blocks TCP port 8080, you need to create and apply an NSG rule directly, not through a policy definition. Therefore, configuring a custom policy definition and assigning it to the subscription would not meet the goal of automatically blocking TCP port 8080 between the virtual networks. Q436 · June 30, 2026 694/951

---

## Domanda 437
*Tipo: multiple_choice · fonte: text_layer*

You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2. VM1 hosts a frontend application that connects to VM2 to retrieve data.Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2. Which Azure Network Watcher feature should you use?

- **A.** IP flow verify
- **B.** Connection troubleshoot
- **C.** Connection monitor **← CORRETTA**
- **D.** NSG flow logs

**Risposta corretta:** C

**Spiegazione:** To view the average round-trip time (RTT) of the packets from VM1 to VM2, the most appropriate Azure Network Watcher feature is the connection monitor. Connection monitor allows you to continuously monitor the connection between two virtual machines and provides detailed information about reachability, latency, and network topology changes over time. This feature is specifically designed to measure and display metrics such as average, minimum, and maximum latency, which aligns with the requirement to view the average RTT. Q437 · June 30, 2026 695/951

---

## Domanda 438
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the public load balancers shown in the following table. You plan to create six virtual machines and to load balance requests to the virtual machines. Each load balancer will load balance three virtual machines. You need to create the virtual machines for the planned solution. How should you create the virtual machines? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** The virtual machines that will be load balanced by using LB1 must -> be created in the same availability set or virtual machine scale set | The virtual machines that will be load balanced by using LB2 must -> be connected to the same virtual network
> Immagini: q438_post0.png

**Spiegazione:** Box 1: be created in the same availability set or virtual machine scale set. The Basic tier is quite restrictive. A load balancer is restricted to a single availability set, virtual machine scale set, or a single machine. Box 2: be connected to the same virtual network The Standard tier can span any virtual machine in a single virtual network, including blends of scale sets, availability sets, and machines. 696/951 Reference: https://www.petri.com/comparing-basic-standard-azure-load-balancers Q438 · June 30, 2026 697/951

---

## Domanda 439
*Tipo: hotspot · fonte: manual_vision*

You have an on-premises data center and an Azure subscription. The data center contains two VPN devices. The subscription contains an Azure virtual network named VNet1. VNet1 contains a gateway subnet. You need to create a site-to-site VPN. The solution must ensure that if a single instance of an Azure VPN gateway fails, or a single on-premises VPN device fails, the failure will not cause an interruption that is longer than two minutes. What is the minimum number of public IP addresses, virtual network gateways, and local network gateways required in Azure? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Public IP addresses -> 2 | Virtual network gateways -> 1 | Local network gateways -> 1
> Immagini: q439_post0.png

**Spiegazione:** 698/951 Q439 · June 30, 2026 699/951

---

## Domanda 440
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains two virtual machines as shown in the following table. You perform a reverse DNS lookup for 10.0.0.4 from VM2. Which FQDN will be returned?

- **A.** vm1.core.windows.net
- **B.** vm1.azure.com
- **C.** vm1.westeurope.cloudapp.azure.com
- **D.** vm1.internal.cloudapp.net **← CORRETTA**

**Risposta corretta:** D
> Esibito: q440_pre0.png

**Spiegazione:** When performing a reverse DNS lookup on Azure virtual machines, the default DNS suffix for Azure provisioned DNS if no specific DNS is configured in the network is 'internal.cloudapp.net'. Therefore, the FQDN returned for the IP address 10.0.0.4 will have the format 'vm1.internal.cloudapp.net'. Q440 · June 30, 2026 700/951

---

## Domanda 441
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a cost of 150. Does this meet the goal?

- **A.** Yes 701/951
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q441_pre0.png

**Spiegazione:** The solution provided does not meet the goal. The suggested action is to create an inbound security rule that allows any traffic from the AzureLoadBalancer source with a priority of 150. However, the primary issue is with the existing rule with priority 200, which blocks all inbound traffic on TCP port 443, including traffic from the Load Balancer health probe. This rule prevents the Load Balancer from correctly assessing the VM's health and routing traffic to it. Adding a rule with priority 150 to allow traffic from the AzureLoadBalancer would indeed allow health probes, but it doesn't directly address the problem of the blocked traffic from 131.107.100.50 over TCP 443 due to the existing deny rule at priority 200. Therefore, removing or adjusting the block rule with priority 200 would be necessary to resolve the connectivity issue. Q441 · June 30, 2026 702/951

---

## Domanda 442
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1. You need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** Add a service endpoint to VNet1
- **B.** Reset GW1
- **C.** Create a route-based virtual network gateway **← CORRETTA**
- **D.** Add a connection to GW1
- **E.** Delete GW1 **← CORRETTA**
- **F.** Add a public IP address space to VNet1

**Risposta corretta:** C, E

**Spiegazione:** To configure a point-to-site connection from an on-premises computer to an Azure virtual network, you need to use a route-based virtual network gateway, as point-to-site connections are only supported by route-based gateways. Therefore, first, you should delete the existing policy-based virtual network gateway, as it does not support point-to-site connections. Next, you should create a new route-based virtual network gateway to enable the point-to-site connectivity. Q442 · June 30, 2026 703/951

---

## Domanda 443
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resources in the following table: In Azure, you create a private DNS zone named adatum.com. You set the registration virtual network to VNet2. The adatum.com zone is configured as shown in the following exhibit: 704/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** The A record for VM5 will be registered automatically in the adatum.com zone. -> No | VM5 can resolve VM9.adatum.com. -> No | VM6 can resolve VM9.adatum.com. -> Yes
> Immagini: q443_post0.png

**Spiegazione:** Box 1: No - Azure DNS provides automatic registration of virtual machines from a single virtual network that's linked to a private zone as a registration virtual network. VM5 does not belong to the registration virtual network though. Box 2: No - Forward DNS resolution is supported across virtual networks that are linked to the private zone as resolution virtual networks. VM5 does belong to a resolution virtual network. Box 3: Yes - VM6 belongs to registration virtual network, and an A (Host) record exists for VM9 in the DNS zone. By default, registration virtual networks also act as resolution virtual networks, in the sense that DNS resolution against the zone works from any of the virtual machines within the registration virtual network. Reference: https://docs.microsoft.com/en-us/azure/dns/private-dns-overview 705/951 Q443 · June 30, 2026 706/951

---

## Domanda 444
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the private DNS zones shown in the following table. You add virtual network links to the private DNS zones as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 707/951

**Risposta corretta:** You can enable auto registration for Link2. -> Yes | You can add a virtual network link for VNET1 to Zone3.com. -> Yes | You can add a virtual network link for VNET2 to Zone1.com and enable auto registration. -> Yes
> Immagini: q444_post0.png

**Spiegazione:** Q444 · June 30, 2026 708/951

---

## Domanda 445
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription. You plan to use an Azure Resource Manager template to deploy a virtual network named VNET1 that will use Azure Bastion. How should you complete the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 709/951

**Risposta corretta:** "name" (subnet) -> AzureBastionSubnet | "addressPrefix" -> 10.10.10.0/27
> Immagini: q445_post0.png

**Spiegazione:** Reference: https://medium.com/charot/deploy-azure-bastion-preview-using-an-arm-template-15e3010767d6 710/951 Q445 · June 30, 2026 711/951

---

## Domanda 446
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Network Watcher, you create a packet capture. Does this meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A

**Spiegazione:** Packet capture is a network diagnostic tool provided by Azure Network Watcher that allows you to intercept and record network packets from or to a virtual machine. By creating a packet capture session, all network traffic between VM1 and VM2 can be captured and inspected for a specific duration, in this case, three hours. This solution meets the goal because it enables detailed traffic analysis, capturing all relevant network activity between the two VMs. Azure Network Watcher's packet capture is specifically designed for such tasks, making it the appropriate tool for the requirements stated in the question. Q446 · June 30, 2026 712/951

---

## Domanda 447
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Network Watcher, you create a connection monitor. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Creating a connection monitor in Azure Network Watcher will not meet the goal of inspecting all the network traffic from VM1 to VM2 for a period of three hours. Connection monitors are used to monitor the connectivity between two points in a network and provide information about reachability, latency, and network topology changes, but they do not capture and inspect the actual network traffic. To inspect all network traffic between VM1 and VM2, a packet capture tool should be used, as it has the capability to capture and analyze all traffic on a specified VM and provides more detailed insights. Q447 · June 30, 2026 713/951

---

## Domanda 448
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Performance Monitor, you create a Data Collector Set (DCS). Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** The goal is to inspect all network traffic from VM1 to VM2 for a period of three hours. Creating a Data Collector Set (DCS) in Performance Monitor is not an appropriate solution for this task, as it is typically used to collect performance data from the local machine, not to inspect network traffic between virtual machines. Instead, the correct approach would involve using network monitoring tools specifically designed for capturing and analyzing network traffic, such as Azure Network Watcher's packet capture feature. This tool is capable of capturing and analyzing network traffic between virtual machines in an Azure environment, which aligns with the requirement of inspecting network traffic between VM1 and VM2. Q448 · June 30, 2026 714/951

---

## Domanda 449
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. You need to load balance HTTPS connections to vm1 and vm2 by using lb1. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Remove the public IP addresses from vm1 and vm2. -> 2. Create a health probe and backend pool on lb1. -> 3. Create a load balancing rule on lb1.
> Immagini: q449_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/load-balancer/tutorial-load-balancer-standard-public-zone- redundant-portal 715/951 Q449 · June 30, 2026 716/951

---

## Domanda 450
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Monitor, you create a metric on Network In and Network Out. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** Creating a metric on Network In and Network Out with Azure Monitor measures traffic volume but does not inspect the contents of the traffic. To inspect all network traffic between VM1 and VM2, packet capture is the appropriate tool, as it allows for detailed inspection of packets sent and received by the virtual machines. Q450 · June 30, 2026 717/951

---

## Domanda 451
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a priority of 64999. Does this meet the goal?

- **A.** Yes 718/951
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q451_pre0.png

**Spiegazione:** Creating an inbound security rule that denies all traffic from the 131.107.100.50 source with a priority of 64999 will not meet the goal. The issue is that there is already a rule (priority 200) blocking all other traffic on port 443, effectively preventing the desired connection. To enable the connection from 131.107.100.50 to App1 on port 443, an appropriate rule allowing this traffic must be added with a priority higher than 200. Denying traffic with a lower priority will not resolve the issue and will continue to block the necessary traffic. Q451 · June 30, 2026 719/951

---

## Domanda 452
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains two on-premises locations named site1 and site2. You need to connect site1 and site2 by using an Azure Virtual WAN. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Create a Virtual WAN resource. -> 2. Create a virtual hub. -> 3. Create VPN sites. -> 4. Connect the VPN sites to the hub.
> Immagini: q452_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-site-to-site-portal Q452 · June 30, 2026 720/951

---

## Domanda 453
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. You have the virtual machines shown in the following table. You have the virtual network interfaces shown in the following table. Server1 is a DNS server that contains the resources shown in the following table. You have an Azure private DNS zone named contoso.com that has a virtual network link to VNET2 and the records shown in the following table. 721/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Server2 resolves host2.contoso.com to 131.107.50.50. -> No | Server2 resolves host1.contoso.com to 131.107.10.15. -> Yes | Server3 resolves host2.contoso.com to 131.107.50.50. -> No
> Immagini: q453_post0.png

**Spiegazione:** Q453 · June 30, 2026 722/951

---

## Domanda 454
*Tipo: multiple_choice · fonte: text_layer*

You have a virtual network named VNet1 as shown in the exhibit. (Click the Exhibit tab.) No devices are connected to VNet1. You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16. You need to create the peering. What should you do first?

- **A.** Modify the address space of VNet1. **← CORRETTA**
- **B.** Add a gateway subnet to VNet1.
- **C.** Create a subnet on VNet1 and VNet2. 723/951
- **D.** Configure a service endpoint on VNet2.

**Risposta corretta:** A
> Esibito: q454_pre0.png

**Spiegazione:** The virtual networks you intend to peer must have non-overlapping IP address spaces. In the given exhibit, VNet1 and VNet2 both have the address space 10.2.0.0/16, which would cause an overlap. Therefore, the first step in creating the peering is to modify the address space of VNet1 to ensure there is no overlap with VNet2. This change is necessary to meet the requirements for peering virtual networks in Azure. Q454 · June 30, 2026 724/951

---

## Domanda 455
*Tipo: multiple_choice · fonte: text_layer*

You have the Azure virtual machines shown in the following table. VNET1 is linked to a private DNS zone named contoso.com that contains the records shown in the following table. You need to ping VM2 from VM1. Which DNS names can you use to ping VM2?

- **A.** comp2.contoso.com and comp4.contoso.com only
- **B.** comp1.contoso.com, comp2.contoso.com, comp3.contoso.com, and comp4.contoso.com
- **C.** comp2.contoso.com only **← CORRETTA**
- **D.** comp1.contoso.com and comp2.contoso.com only
- **E.** comp1.contoso.com, comp2.contoso.com, and comp4.contoso.com only

**Risposta corretta:** C
> Esibito: q455_pre0.png, q455_pre1.png

**Spiegazione:** 725/951 To successfully ping VM2, a DNS name that resolves to its IP address (10.0.0.5) is required. The record types in the DNS zone are: TXT, A, CNAME, and PTR. TXT records are text-based and not resolvable to IP addresses for pinging. PTR records are used for reverse DNS lookups, mapping IP addresses to domain names and are not used for pinging. CNAME records are aliases and resolve to the domain names they point to. However, the CNAME record in question points to a TXT record, making it ineffective for pinging. Therefore, the only relevant DNS name is the one associated with the A record, which is comp2.contoso.com. Hence, the correct option is comp2.contoso.com only. Q455 · June 30, 2026 726/951

---

## Domanda 456
*Tipo: hotspot · fonte: manual_vision*

You have a network security group (NSG) named NSG1 that has the rules defined in the exhibit. (Click the Exhibit tab.) NSG1 is associated to a subnet named Subnet1. Subnet1 contains the virtual machines shown in the following table. You need to add a rule to NSG1 to ensure that VM1 can ping VM2. The solution must use the principle of LEAST privilege. How should you configure the rule? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 727/951

**Risposta corretta:** Direction -> Outbound | Source -> 10.1.0.10 | Destination -> 10.1.0.11 | Priority -> 110
> Immagini: q456_post0.png

**Spiegazione:** 728/951 Q456 · June 30, 2026 729/951

---

## Domanda 457
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: On Computer2, you set the Startup type for the IPSec Policy Agent service to Automatic. Does this meet the goal?

- **A.** Yes
- **B.** No **← CORRETTA**

**Risposta corretta:** B

**Spiegazione:** To establish a point-to-site VPN connection from Computer2 to the Azure virtual network VNet1, it is essential that Computer2 has the client certificate installed. The client certificate must be generated from the self-signed root certificate and then exported from Computer1 and installed on Computer2. Setting the Startup type for the IPSec Policy Agent service to Automatic on Computer2 will not suffice to meet the goal, as the installation of the client certificate is the necessary step for authentication to succeed. Q457 · June 30, 2026 730/951

---

## Domanda 458
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Session persistence to Client IP and protocol **← CORRETTA**
- **B.** Protocol to UDP
- **C.** Session persistence to None
- **D.** Floating IP (direct server return) to Enabled

**Risposta corretta:** A

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you need to configure session persistence. Specifically, configuring session persistence to Client IP and protocol ensures that successive requests from the same client IP address and protocol combination will be handled by the same virtual machine. This is necessary to maintain session consistency for web servers where session state or data might depend on the same server handling multiple requests from the same client. Q458 · June 30, 2026 731/951

---

## Domanda 459
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that uses the public IP addresses shown in the following table. You need to create a public Azure Standard Load Balancer. Which public IP addresses can you use?

- **A.** IP1, IP2, and IP3
- **B.** IP2 only
- **C.** IP3 only **← CORRETTA**
- **D.** IP1 and IP3 only

**Risposta corretta:** C
> Esibito: q459_pre0.png

**Spiegazione:** To create a public Azure Standard Load Balancer, it is necessary to use a public IP address with a Standard SKU. In the given table, only IP3 has a Standard SKU. IP1 and IP2 have a Basic SKU, which does not match the required SKU for a Standard Load Balancer. Therefore, the only public IP address you can use is IP3. Q459 · June 30, 2026 732/951

---

## Domanda 460
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You are deploying an Azure Kubernetes Service (AKS) cluster that will contain multiple pods. The pods will use kubernet networking. You need to restrict network traffic between the pods. What should you configure on the AKS cluster?

- **A.** the Azure network policy
- **B.** the Calico network policy **← CORRETTA**
- **C.** pod security policies
- **D.** an application security group

**Risposta corretta:** B

**Spiegazione:** To restrict network traffic between pods in an Azure Kubernetes Service (AKS) cluster using kubenet networking, you should configure the Calico network policy. Calico supports both Azure CNI and kubenet networking, which makes it suitable for this scenario. Azure network policy, on the other hand, only supports Azure CNI and would not be applicable here. Pod security policies and application security groups do not provide the necessary control for restricting pod-to-pod network traffic. Q460 · June 30, 2026 733/951

---

## Domanda 461
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the VPN Gateway and subnets in the following table: Subnet1 contains a virtual appliance named VM1 that operates as a router. You create a routing table named RT1. You need to route all inbound traffic from the VPN gateway to VNet1 through VM1. How should you configure RT1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 734/951

**Risposta corretta:** Address prefix -> 10.0.0.0/16 | Next hop type -> Virtual appliance | Assigned to -> GatewaySubnet
> Immagini: q461_post0.png

**Spiegazione:** 735/951 Q461 · June 30, 2026

---

## Domanda 462
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Enabled
- **B.** Floating IP (direct server return) to Disabled
- **C.** a health probe
- **D.** Session persistence to Client IP and Protocol **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** In order to ensure that visitors are serviced by the same web server for each request, you need to configure session persistence on the Azure load balancer. Session persistence, also known as sticky sessions, ensures that requests from the same client are always directed to the same backend server. Specifically, setting 'Session Persistence' to 'Client IP and Protocol' will achieve this. This configuration makes sure that successive requests from the same client IP address and protocol combination will be handled by the same backend server, fulfilling the requirement. Q462 · June 30, 2026 736/951

---

## Domanda 463
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual machines shown in the following table: VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections. Subnet1 and Subnet2 are in a virtual network named VNET1. The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules. NSG2 uses the default rules and the following custom incoming rule: Priority: 100 Name: Rule1 Port: 3389 Protocol: TCP Source: Any Destination: Any Action: Allow NSG1 is associated to Subnet1. NSG2 is associated to the network interface of VM2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 737/951

**Risposta corretta:** From the Internet, you can connect to VM1 by using Remote Desktop. -> No | From the Internet, you can connect to VM2 by using Remote Desktop. -> Yes | From VM1, you can connect to VM2 by using Remote Desktop -> Yes
> Immagini: q463_post0.png

**Spiegazione:** Q463 · June 30, 2026 738/951

---

## Domanda 464
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains two virtual machines named VM1 and VM2. You create an Azure load balancer. You plan to create a load balancing rule that will load balance HTTPS traffic between VM1 and VM2. Which two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** a frontend IP address **← CORRETTA**
- **B.** an inbound NAT rule
- **C.** a virtual network
- **D.** a backend pool **← CORRETTA**
- **E.** a health probe

**Risposta corretta:** A, D

**Spiegazione:** To create a load balancing rule for HTTPS traffic between VM1 and VM2 using an Azure load balancer, you need to define a frontend IP address and a backend pool. The frontend IP address acts as the entry point for incoming traffic, allowing the load balancer to distribute this traffic to the backend resources. The backend pool is necessary to specify which virtual machines (VM1 and VM2) will receive the load-balanced traffic. These two elements are essential to establishing the load balancing rule. While health probes are also important for monitoring the health of backend resources, they are not a prerequisite for creating the load balancing rule itself. Q464 · June 30, 2026 739/951

---

## Domanda 465
*Tipo: multiple_choice · fonte: text_layer*

You have an on-premises network that contains a database server named dbserver1. You have an Azure subscription. You plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone. You need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to dbserver1. Which type of public IP address SKU and assignment should you use for the gateway?

- **A.** a basic SKU and a static IP address assignment
- **B.** a standard SKU and a static IP address assignment **← CORRETTA**
- **C.** a basic SKU and a dynamic IP address assignment

**Risposta corretta:** B

**Spiegazione:** To set up an Azure VPN gateway for a site-to-site VPN that allows virtual machines in separate availability zones to connect to an on-premises database server, you need a Standard SKU and a static IP address assignment. This is because the Standard SKU supports availability zones, ensuring high availability and redundancy across zones. Additionally, when configuring a Standard SKU for a public IP address, the assignment is static by default, providing a consistent address required for reliable VPN connections. Q465 · June 30, 2026 740/951

---

## Domanda 466
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual machines shown in the following table. The subscription contains a storage account named contoso2024 as shown in the following exhibit. 741/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

**Risposta corretta:** VM1 can connect to contoso2024 by using 131.107.10.10. -> Yes | VM2 can connect to contoso2024 by using 150.120.10.10. -> Yes | VM3 must use its private IP address to connect to contoso2024. -> No
> Immagini: q466_post0.png

**Spiegazione:** Q466 · June 30, 2026 742/951

---

## Domanda 467
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have two Azure virtual machines as shown in the following table. You create the Azure DNS zones shown in the following table. You perform the following actions: ׀¢׀3⁄4 fabrikam.com, you add a virtual network link to vnet1 and enable auto registration. For contoso.com, you assign vm1 and vm2 the Owner role. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20. -> No | The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.4. -> Yes | The DNS A record for vm2 is added to fabrikam.com and has the IP address of 10.0.1.5. -> Yes
> Immagini: q467_post0.png

**Spiegazione:** 743/951 Q467 · June 30, 2026 744/951

---

## Domanda 468
*Tipo: multiple_choice · fonte: text_layer*

You have an on-premises datacenter and an Azure subscription. You plan to connect the datacenter to Azure by using ExpressRoute. You need to deploy an ExpressRoute gateway. The solution must meet the following requirements: Support up to 10 Gbps of traffic. Support availability zones. Support FastPath. Minimize costs. Which SKU should you deploy?

- **A.** ERGw1AZ
- **B.** ERGw2
- **C.** ErGw3
- **D.** ErGw3AZ **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To meet the requirements of supporting up to 10 Gbps of traffic, supporting availability zones, supporting FastPath, and minimizing costs, the appropriate SKU to deploy is ErGw3AZ. This SKU fulfills the necessary conditions such as high performance, zone-level redundancy, and FastPath capability, making it the best option among the provided choices. Q468 · June 30, 2026 745/951

---

## Domanda 469
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have a virtual network named VNET1 that contains the subnets shown in the following table: You have Azure virtual machines that have the network configurations shown in the following table: For NSG1, you create the inbound security rule shown in the following table: For NSG2, you create the inbound security rule shown in the following table: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 746/951

**Risposta corretta:** VM2 can connect to the TCP port 1433 services on VM1. -> No | VM1 can connect to the TCP port 1433 services on VM2. -> Yes | VM2 can connect to the TCP port 1433 services on VM3. -> Yes
> Immagini: q469_post0.png

**Spiegazione:** Q469 · June 30, 2026 747/951

---

## Domanda 470
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription named Subscription1. Subscription1 contains the virtual machines in the following table: Subscription1 contains a virtual network named VNet1 that has the subnets in the following table: VM3 has multiple network adapters, including a network adapter named NIC3. IP forwarding is enabled on NIC3. Routing is enabled on VM3. You create a route table named RT1 that contains the routes in the following table: You apply RT1 to Subnet1 and Subnet2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 748/951

**Risposta corretta:** VM3 can establish a network connection to VM1. -> Yes | If VM3 is turned off, VM2 can establish a network connection to VM1. -> No | VM1 can establish a network connection to VM2. -> Yes
> Immagini: q470_post0.png, q470_post1.png

**Spiegazione:** IP forwarding enables the virtual machine a network interface is attached to: ✑ Receive network traffic not destined for one of the IP addresses assigned to any of the IP configurations assigned to the network interface. Send network traffic with a different source IP address than the one assigned to one of a network interface's IP configurations. The setting must be enabled for every network interface that is attached to the virtual machine that receives traffic that the virtual machine needs to forward. A virtual machine can forward traffic whether it has multiple network interfaces or a single network interface attached to it. Box 1: Yes - The routing table allows connections from VM3 to VM1 and VM2. And as IP forwarding is enabled on VM3, VM3 can connect to VM1. Box 2: No - VM3, which has IP forwarding, must be turned on, in order for VM2 to connect to VM1. Box 3: Yes - The routing table allows connections from VM1 and VM2 to VM3. IP forwarding on VM3 allows VM1 to connect to VM2 via VM3. Reference: https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview https://www.quora.com/What-is-IP-forwarding 749/951 Q470 · June 30, 2026 750/951

---

## Domanda 471
*Tipo: multiple_choice · fonte: text_layer*

Your on-premises network contains an SMB share named Share1. You have an Azure subscription that contains the following resources: A web app named webapp1 A virtual network named VNET1 You need to ensure that webapp1 can connect to Share1. What should you deploy?

- **A.** an Azure Application Gateway
- **B.** an Azure Active Directory (Azure AD) Application Proxy
- **C.** an Azure Virtual Network Gateway **← CORRETTA**

**Risposta corretta:** C

**Spiegazione:** To ensure that the web app can connect to the on-premises SMB share, you need a connection between the on-premises network and the Azure virtual network. An Azure Virtual Network Gateway facilitates this by creating a Site-to-Site VPN connection, allowing secure communication between the two networks. This is necessary because the web app needs network connectivity to the SMB share, which can be achieved through the virtual network that the web app and the gateway are part of. Q471 · June 30, 2026 751/951

---

## Domanda 472
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You create a public IP address named IP1. Which two resources can you associate to IP1? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.

- **A.** VM1
- **B.** LB1 **← CORRETTA**
- **C.** NIC1 **← CORRETTA**
- **D.** VPN1
- **E.** VNet1

**Risposta corretta:** B, C
> Esibito: q472_pre0.png

**Spiegazione:** Q472 · June 30, 2026 752/951

---

## Domanda 473
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1. You need to allow access to storage1 from selected networks and your home office. The solution must minimize administrative effort. What should you do first for storage1?

- **A.** Add a private endpoint.
- **B.** Modify the Public network access settings. **← CORRETTA**
- **C.** Select Internet routing.
- **D.** Modify the Access Control (IAM) settings.

**Risposta corretta:** B

**Spiegazione:** Q473 · June 30, 2026 753/951

---

## Domanda 474
*Tipo: multiple_choice · fonte: text_layer*

You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network. Which tunneling protocol should you use?

- **A.** IKEv1
- **B.** PPTP
- **C.** IKEv2 **← CORRETTA**
- **D.** L2TP

**Risposta corretta:** C

**Spiegazione:** For deploying route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network, the appropriate tunneling protocol to use is IKEv2. IKEv2 supports multiple simultaneous connections and is designed for dynamic routing, making it suitable for route-based VPNs, which allow for more scalability and flexibility compared to policy-based VPNs that typically use IKEv1. Additionally, IKEv2 provides better security and performance enhancements over IKEv1. Q474 · June 30, 2026 754/951

---

## Domanda 475
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You configure Azure Site Recovery to replicate VM1 between the US East and West US regions. You perform a test failover of VM1 and specify VNET2 as the target virtual network. When the test version of VM1 is created, to which subnet will the virtual machine be connected?

- **A.** TestSubnet1
- **B.** DemoSubnet1 **← CORRETTA**
- **C.** RecoverySubnetA
- **D.** RecoverySubnetB

**Risposta corretta:** B
> Esibito: q475_pre0.png

**Spiegazione:** When performing a test failover in Azure Site Recovery, the subnet of the target virtual machine is selected based on the name of the source VM's subnet. If the target virtual network does not contain 755/951 a subnet with the same name, the first subnet in alphabetical order is selected. In this case, since the subnets in VNET2 do not have a name equivalent to 'Subnet2' from VNET1, the test version of VM1 would be connected to 'DemoSubnet1', the first subnet alphabetically in VNET2. Q475 · June 30, 2026

---

## Domanda 476
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Protocol to UDP
- **B.** Session persistence to None
- **C.** Floating IP (direct server return) to Disabled
- **D.** Session persistence to Client IP **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence to Client IP on the Azure load balancer. This setting ensures that traffic from the same client IP is always routed to the same backend instance, providing consistent service for each visitor's session. Q476 · June 30, 2026 756/951

---

## Domanda 477
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. You have the peering options shown in the following exhibit. You need to design a communication strategy for the resources on the virtual networks. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 757/951

**Risposta corretta:** Peering 1-2 is a possible configuration. -> No | Peering 1-3 is a possible configuration. -> No | Peering 3-2 is a possible configuration. -> No
> Immagini: q477_post0.png

**Spiegazione:** Q477 · June 30, 2026 758/951

---

## Domanda 478
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Disabled
- **B.** Session persistence to Client IP **← CORRETTA**
- **C.** Protocol to UDP
- **D.** Idle Time-out (minutes) to 20

**Risposta corretta:** B

**Spiegazione:** To ensure visitors are serviced by the same web server for each request, you should configure Session persistence to Client IP. This setting, also known as source IP affinity, ensures that traffic from the same client IP address is routed to the same backend instance, providing consistent service to the user across multiple requests. Q478 · June 30, 2026 759/951

---

## Domanda 479
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named VNET1 and VNET2 that are peered. You plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1. You need to configure NSG1 to allow inbound access to the virtual machines via Bastion1. Which port should you configure for the inbound security rule?

- **A.** 22
- **B.** 443 **← CORRETTA**
- **C.** 389
- **D.** 8080

**Risposta corretta:** B

**Spiegazione:** To enable inbound access to virtual machines via Azure Bastion, you should configure the network security group (NSG) to allow traffic on port 443. Azure Bastion uses HTTPS (port 443) to securely access the virtual machines through its web interface. This port is crucial for establishing the secure connections needed for remote desktop and SSH sessions to the VMs. Other ports like 22, 389, and 8080 are not used for this purpose by Azure Bastion. Q479 · June 30, 2026 760/951

---

## Domanda 480
*Tipo: hotspot · fonte: manual_vision*

Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table. You plan to migrate contoso.com to Azure. You create an Azure virtual network named VNET1 that has the following settings: Address space: 10.0.0.0/16 Subnet: Name: Subnet1 IPv4: 10.0.1.0/24 You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names. How should you configure DC1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 761/951

**Risposta corretta:** IP address -> Use 10.0.1.3 | Name resolution -> Create an Azure Private DNS zone named contoso.com
> Immagini: q480_post0.png

**Spiegazione:** Q480 · June 30, 2026 762/951

---

## Domanda 481
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Session persistence to None
- **B.** a health probe
- **C.** Session persistence to Client IP **← CORRETTA**
- **D.** Idle Time-out (minutes) to 20

**Risposta corretta:** C

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence to Client IP. This setting ensures that requests from the same client IP address are consistently routed to the same backend instance, maintaining session state across multiple requests. Q481 · June 30, 2026 763/951

---

## Domanda 482
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the virtual networks shown in the following table. You need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region. To which virtual networks can you deploy AF1?

- **A.** VNET1, VNET2, VNET3, and VNET4
- **B.** VNET1 and VNET2 only
- **C.** VNET1 only **← CORRETTA**
- **D.** VNET1, VNET2, and VNET4 only
- **E.** VNET1 and VNET4 only

**Risposta corretta:** C
> Esibito: q482_pre0.png

**Spiegazione:** An Azure Firewall can only be deployed within the same virtual network (VNet) and resource group as specified in the Azure subscription configuration. Given that the firewall is required to be deployed to RG1 in the West US region, the only VNet that fits these criteria is VNET1. VNET1 is the only virtual network that is located in the West US region and also within the RG1 resource group. Q482 · June 30, 2026 764/951

---

## Domanda 483
*Tipo: multiple_choice · fonte: text_layer*

You have an on-premises network. You have an Azure subscription that contains three virtual networks named VNET1. VNET2. and VNET3. The virtual networks are peered and connected to the on-premises network. The subscription contains the virtual machines shown in the following table. You need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor. What is the minimum number of connection monitors you should deploy?

- **A.** 1
- **B.** 2 **← CORRETTA**
- **C.** 3
- **D.** 4

**Risposta corretta:** B
> Esibito: q483_pre0.png

**Spiegazione:** To monitor connectivity between the virtual machines and the on-premises network using Connection Monitor, you need to consider the region-specific nature of the Connection Monitor resource in Azure Network Watcher. In this scenario, the virtual machines are located in two different regions: West US and Central US. As Connection Monitor is region-specific, you need to deploy one Connection Monitor in each region to cover all virtual machines. Therefore, the minimum number of connection monitors required is 2. 765/951 Q483 · June 30, 2026 766/951

---

## Domanda 484
*Tipo: hotspot_yes_no · fonte: manual_vision*

You plan to deploy the following Azure Resource Manager (ARM) template. 767/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. 768/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** LB1 will be connected to a subnet named VNET1/netname -> No | LB1 can be deployed only to the resource group that contains VNET1 -> No | The value of the sku variable can be provided as a parameter when the template is deployed from a command prompt -> No
> Immagini: q484_post0.png

**Spiegazione:** Q484 · June 30, 2026 769/951

---

## Domanda 485
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account. The account stores website data. You need to ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user's location. What should you configure?

- **A.** private endpoints
- **B.** Azure Firewall rules
- **C.** Routing preference **← CORRETTA**
- **D.** load balancing

**Risposta corretta:** C

**Spiegazione:** To ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user's location, you should configure routing preference. Routing preference in Azure allows you to specify how traffic should be routed, ensuring that it takes the most optimized and low-latency path through the Microsoft global network. This configuration ensures that traffic will use the closest point-of- presence (POP) to the user's location, delivering better performance and reliability for accessing the storage account. Q485 · June 30, 2026 770/951

---

## Domanda 486
*Tipo: multiple_choice · fonte: text_layer*

You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1. Subnet1 is in a virtual network named VNet1. You need to prevent VM1 from accessing VM2 on port 3389. What should you do?

- **A.** Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network interface of VM1. **← CORRETTA**
- **B.** Configure Azure Bastion in VNet1.
- **C.** Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1.
- **D.** Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1.

**Risposta corretta:** A

**Spiegazione:** To prevent VM1 from accessing VM2 on port 3389, you need to create a network security group (NSG) with an outbound security rule that denies traffic to the destination port 3389 and apply this NSG to the network interface of VM1. This ensures that VM1 cannot initiate connections to VM2 on port 3389, effectively blocking the desired access while leaving other communication channels unaffected. Configuring a rule for the source port 3389 would be incorrect as outbound connections from VM1 generally use a random high port number. Q486 · June 30, 2026 771/951

---

## Domanda 487
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You need to manage outbound traffic from VNET1 by using Firewall1. What should you do first?

- **A.** Configure the Hybrid Connection Manager.
- **B.** Upgrade ASP1 to the Premium SKU.
- **C.** Create a route table. **← CORRETTA**
- **D.** Create an Azure Network Watcher.

**Risposta corretta:** C
> Esibito: q487_pre0.png

**Spiegazione:** To manage outbound traffic from a virtual network using an Azure Firewall, you need to create a user-defined route table. This route table directs the traffic from the virtual network (VNET1) to the firewall (Firewall1). This process overrides the default routing behavior and ensures that all outbound traffic is managed by the firewall. Configuring Hybrid Connection Manager, upgrading the App Service plan, or creating an Azure Network Watcher are not directly related to setting up outbound traffic management via the firewall. Q487 · June 30, 2026 772/951

---

## Domanda 488
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. All the resources connect to a virtual network named VNet1. You plan to deploy an Azure Bastion host named Bastion1 to VNet1. Which resources can be protected by using Bastion1?

- **A.** VM1 only **← CORRETTA**
- **B.** contoso.com only
- **C.** App1 and contoso.com only
- **D.** VM1 and contoso.com only
- **E.** VM1, App1, and contoso.com

**Risposta corretta:** A
> Esibito: q488_pre0.png

**Spiegazione:** Azure Bastion is a service that provides secure and seamless RDP/SSH connectivity to virtual machines within a virtual network. It allows you to connect to the virtual machine using your browser and the Azure portal, or via the native SSH or RDP client already installed on your local computer. Therefore, the primary resource that Azure Bastion can protect is the virtual machine (VM1). Web apps and Azure AD DS domains are not suitable for Azure Bastion access, as they do not require or utilize RDP/SSH connectivity for such management functions. Consequently, VM1 is the only resource that can be protected by using Bastion1. 773/951 Q488 · June 30, 2026

---

## Domanda 489
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Session persistence to None
- **B.** a health probe
- **C.** Session persistence to Client IP and protocol **← CORRETTA**
- **D.** Idle Time-out (minutes) to 20

**Risposta corretta:** C

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence to Client IP and protocol. This setting ensures that successive requests from the same client IP address and protocol are directed to the same backend instance, maintaining a consistent session experience for the user. Q489 · June 30, 2026 774/951

---

## Domanda 490
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** a health probe
- **B.** Floating IP (direct server return) to Enabled
- **C.** Session persistence to Client IP and protocol **← CORRETTA**
- **D.** Protocol to UDP

**Risposta corretta:** C

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence. Session persistence, also known as sticky sessions, keeps the client requests directed to the same server based on the client's IP address and the protocol being used. This helps maintain state information across multiple requests from the same client. In this case, setting 'Session persistence to Client IP and protocol' is the correct configuration for achieving this. Q490 · June 30, 2026 775/951

---

## Domanda 491
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains 10 virtual machines and the resources shown in the following table. You need to ensure that Server1 can support 100 concurrent SSH users. The solution must minimize administrative effort. What should you do first?

- **A.** Resize the subnet of Bastion1
- **B.** Configure host scaling.
- **C.** Create a network security group (NSG)
- **D.** Upgrade Bastion1 to the Standard SKU **← CORRETTA**

**Risposta corretta:** D
> Esibito: q491_pre0.png

**Spiegazione:** To ensure that Bastion1 can support 100 concurrent SSH users, the first step should be upgrading Bastion1 to the Standard SKU. The Basic SKU only supports up to 40 concurrent SSH connections per instance, with a maximum of two instances, thus supporting up to 80 concurrent SSH connections. The Standard SKU allows for host scaling, where more instances can be added, thereby supporting a higher number of concurrent connections. Resizing the subnet or creating a network security group would not directly increase the concurrent SSH connection capacity. Q491 · June 30, 2026 776/951

---

## Domanda 492
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Session persistence to Client IP and protocol **← CORRETTA**
- **B.** Protocol to UDP
- **C.** Session persistence to None
- **D.** Floating IP (direct server return) to Disabled

**Risposta corretta:** A

**Spiegazione:** To ensure that visitors are consistently serviced by the same web server for each request, you need to configure session persistence to Client IP and protocol. This setting ensures that all requests from a particular client are directed to the same virtual machine, maintaining the session continuity needed for web applications. Q492 · June 30, 2026 777/951

---

## Domanda 493
*Tipo: drag_and_drop · fonte: manual_vision*

You have a Windows 11 device named Device and an Azure subscription that contains the resources shown in the following table. Device1 has Azure PowerShell and Azure Command-Line Interface (CLI) installed. From Device1, you need to establish a Remote Desktop connection to VM1. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Upgrade Bastion1 to the Standard SKU. -> 2. From Bastion1, select Native Client Support. -> 3. From Azure CLI on Device1, run az network bastion rdp.
> Immagini: q493_post0.png

**Spiegazione:** 778/951 Q493 · June 30, 2026

---

## Domanda 494
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Enabled
- **B.** Session persistence to Client IP **← CORRETTA**
- **C.** Protocol to UDP
- **D.** Idle Time-out (minutes) to 20

**Risposta corretta:** B

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence on the Azure load balancer. Session persistence, also known as client IP affinity, ensures that all requests from a single client are directed to the same backend server. This is crucial for web applications that maintain session state, such as those requiring authentication or shopping carts. Q494 · June 30, 2026 779/951

---

## Domanda 495
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that has the public IP addresses shown in the following table. You plan to deploy an Azure Bastion Basic SKU host named Bastion1. Which IP addresses can you use?

- **A.** IP1 only **← CORRETTA**
- **B.** IP1 and IP2 only
- **C.** IP3, IP4, and IP5 only
- **D.** IP1, IP2, IP4, and IP5 only
- **E.** IP1, IP2, IP3, IP4, and IP5

**Risposta corretta:** A
> Esibito: q495_pre0.png

**Spiegazione:** To deploy an Azure Bastion Basic SKU host, the Public IP address must have specific configurations. It must have a Standard SKU, be of static nature, and be regional. Based on the provided table, only IP1 meets all these criteria, as it is IPv4 with a Standard SKU, Regional tier, and Static assignment. Other IPs either do not meet the SKU requirement (IP3, IP4, IP5), are Global (IP2), which is not supported for Azure Bastion, or have dynamic assignment, which is also not supported. 780/951 Q495 · June 30, 2026

---

## Domanda 496
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Disabled
- **B.** Floating IP (direct server return) to Enabled
- **C.** a health probe
- **D.** Session persistence to Client IP **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you need to configure Session persistence to Client IP. This setting, also known as session affinity, distributes the incoming requests from the same client IP to the same backend server. This ensures that a client maintains a consistent connection with a specific web server. Q496 · June 30, 2026 781/951

---

## Domanda 497
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Enabled
- **B.** Idle Time-out (minutes) to 20
- **C.** a health probe
- **D.** Session persistence to Client IP **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you need to configure session persistence. This setting ensures that the load balancer directs the client's subsequent requests to the same server. Configuring 'Session persistence to Client IP' will achieve this because it binds the client's IP address to a specific backend server, ensuring consistent service from the same web server for that client. Q497 · June 30, 2026 782/951

---

## Domanda 498
*Tipo: multiple_choice · fonte: text_layer*

You have two Azure subscriptions named Sub1 and Sub2. Sub1 contains a virtual machine named VM1 and a storage account named storage1. VM1 is associated to the resources shown in the following table. You need to move VM1 to Sub2. Which resources should you move to Sub2?

- **A.** VM1, Disk1, and NetInt1 only
- **B.** VM1, Disk1, and VNet1 only
- **C.** VM1, Disk1, and storage1 only
- **D.** VM1, Disk1, NetInt1, and VNet1 **← CORRETTA**

**Risposta corretta:** D
> Esibito: q498_pre0.png

**Spiegazione:** When you move a virtual machine (VM) to another Azure subscription, all its associated resources must be moved to ensure the VM continues to function as expected. In this scenario, VM1 is associated with Disk1 (an operating system disk), NetInt1 (a network interface), and VNet1 (a virtual network). These resources are integral to the VM's operation, providing necessary disk storage, network connectivity, and network infrastructure respectively. Therefore, the correct resources to move are VM1, Disk1, NetInt1, and VNet1. The storage account storage1 is not explicitly mentioned as being associated with VM1 and therefore does not need to be moved. 783/951 Q498 · June 30, 2026

---

## Domanda 499
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Session persistence to Client IP and protocol **← CORRETTA**
- **B.** Idle Time-out (minutes) to 20
- **C.** Session persistence to None
- **D.** Floating IP (direct server return) to Enabled

**Risposta corretta:** A

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence. By setting session persistence to Client IP and protocol, the Azure load balancer will ensure that all requests from the same client IP are directed to the same virtual machine, maintaining session continuity and providing a consistent user experience. Q499 · June 30, 2026 784/951

---

## Domanda 500
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Floating IP (direct server return) to Disabled
- **B.** Idle Time-out (minutes) to 20
- **C.** a health probe
- **D.** Session persistence to Client IP **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you need to configure session persistence to Client IP. Session persistence, also known as sticky sessions, ensures that all requests from a client during a session are sent to the same server. Q500 · June 30, 2026 785/951

---

## Domanda 501
*Tipo: multiple_choice · fonte: text_layer*

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?

- **A.** Session persistence to Client IP **← CORRETTA**
- **B.** Idle Time-out (minutes) to 20
- **C.** Session persistence to None
- **D.** Protocol to UDP

**Risposta corretta:** A

**Spiegazione:** To ensure that visitors are serviced by the same web server for each request, you should configure session persistence to Client IP. This setting ensures that requests from the same client are consistently routed to the same server, providing a stable and continuous user experience. Q501 · June 30, 2026 786/951

---

## Domanda 502
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You create a routing table named RT1. You need to add a route to RT1 that specifies the next hop IP address. Which next hop type should you select?

- **A.** Internet
- **B.** Virtual network gateway
- **C.** Virtual network
- **D.** Virtual appliance **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** Q502 · June 30, 2026 787/951

---

## Domanda 503
*Tipo: multiple_choice · fonte: text_layer*

You have two Azure subscriptions named Sub1 and Sub2 that are linked to separate Microsoft Entra tenants. You have the virtual networks shown in the following table. Which virtual networks can you peer with VNet1?

- **A.** VNet2 only
- **B.** VNet2 and VNet3 only
- **C.** VNet2 and VNet4 only
- **D.** VNet2, VNet3, and VNet4 only
- **E.** VNet2, VNet3, VNet4, and VNet5 **← CORRETTA**

**Risposta corretta:** E
> Esibito: q503_pre0.png

**Spiegazione:** Q503 · June 30, 2026 788/951

---

## Domanda 504
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a Recovery Services vault named Vault1. You need to enable multi-user authorization (MAU) for Vault1.Which resource should you create first?

- **A.** an administrative unit
- **B.** a managed identity
- **C.** a resource guard **← CORRETTA**
- **D.** a custom Azure role

**Risposta corretta:** C

**Spiegazione:** To enable multi-user authorization (MAU) for a Recovery Services vault in Azure, you need to create a Resource Guard first. A Resource Guard adds an additional layer of protection by requiring additional authorization for critical operations. This ensures that critical operations on the vault cannot be performed without proper authorization from multiple users, enhancing security. Q504 · June 30, 2026 789/951

---

## Domanda 505
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a priority of 150. Does this meet the goal?

- **A.** Yes 790/951
- **B.** No **← CORRETTA**

**Risposta corretta:** B
> Esibito: q505_pre0.png

**Spiegazione:** The existing rules include a rule with priority 100 that allows traffic from 131.107.100.50 over TCP port 443 and a rule with priority 200 that blocks any other traffic on port 443. Adding a new rule with a priority of 150 to allow traffic from AzureLoadBalancer will not change the fact that traffic from 131.107.100.50 is already allowed by the higher priority rule at 100. Therefore, this solution does not meet the goal. The connection issue might be due to another reason such as the virtual machine being powered off or another misconfiguration outside of the network security group rules shown. Q505 · June 30, 2026 791/951

---

## Domanda 506
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the resources shown in the following table. You create a route table named RT1 in the East US Azure region. To which resources can you associate RT1?

- **A.** VNet1 only
- **B.** Subnet1 only **← CORRETTA**
- **C.** VNet1 and NIC1 only
- **D.** Subnet1 and NIC1 only
- **E.** VNet1, Subnet1, and NIC1

**Risposta corretta:** B
> Esibito: q506_pre0.png

**Spiegazione:** Q506 · June 30, 2026 792/951

---

## Domanda 507
*Tipo: multiple_choice · fonte: text_layer*

You create an Azure VM named VM1 that runs Windows Server 2019. VM1 is configured as shown in the exhibit. (Click the Exhibit tab.) You need to enable Desired State Configuration for VM1. What should you do first?

- **A.** Connect to VM1.
- **B.** Start VM1. **← CORRETTA**
- **C.** Capture a snapshot of VM1.
- **D.** Configure a DNS name for VM1.

**Risposta corretta:** B
> Esibito: q507_pre0.png

**Spiegazione:** To enable Desired State Configuration (DSC) for VM1, the virtual machine must be running. Since VM1 is currently stopped as shown in the details of the VM configuration, the first step is to start 793/951 VM1. Q507 · June 30, 2026 794/951

---

## Domanda 508
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. The subnets have the IP address spaces shown in the following table. You plan to create a container app named contapp1 in the East US Azure region. You need to create a container app environment named con-env1 that meets the following requirements: Uses its own virtual network. Uses its own subnet. Is connected to the smallest possible subnet. To which virtual networks can you connect con-env1, and which subnet mask should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 795/951

**Risposta corretta:** Virtual network -> VNet3 only | Subnet mask -> /23
> Immagini: q508_post0.png

**Spiegazione:** Q508 · June 30, 2026 796/951

---

## Domanda 509
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the virtual networks shown in the following table. All the virtual networks are peered. Each virtual network contains nine virtual machines. You need to configure secure RDP connections to the virtual machines by using Azure Bastion. What is the minimum number of Bastion hosts required?

- **A.** 1 **← CORRETTA**
- **B.** 3
- **C.** 9
- **D.** 10 797/951

**Risposta corretta:** A
> Esibito: q509_pre0.png

**Spiegazione:** Azure Bastion can be used with Virtual Network peering, and it supports both Virtual Network peering which connects virtual networks within the same Azure region and Global Virtual Network peering which connects virtual networks across different regions. With VM peering configured, a single Bastion host can manage secure RDP or SSH connections to all virtual machines within the peered virtual networks, regardless of the region. Thus, only one Bastion host is required to securely connect to all the virtual machines across the peered virtual networks in the Azure subscription. Q509 · June 30, 2026 798/951

---

## Domanda 510
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. Each virtual machine contains only a private IP address. You create an Azure bastion for VNet1 as shown in the following exhibit. 799/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 800/951

**Risposta corretta:** The Remote Desktop Connection client (mstsc.exe) can be used to connect to VM1 through Bastion1. -> No | The Azure portal can use SSH to connect to VM2 through Bastion1. -> Yes | The Azure portal can be used to connect to VM3 through Bastion1. -> No
> Immagini: q510_post0.png

**Spiegazione:** Q510 · June 30, 2026 801/951

---

## Domanda 511
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the subnets shown in the following table. The subscription contains the storage accounts shown in the following table. You create a service endpoint policy named Policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription. For each of the following statements, select Yes if the statement is true. Otherwise, select No. 802/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** Policy1 can be applied to Subnet3. -> Yes | Only storage1 and storage2 can be accessed from VNet2. -> No | Only storage2 can be accessed from VNet3. -> No
> Immagini: q511_post0.png

**Spiegazione:** Q511 · June 30, 2026 803/951

---

## Domanda 512
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual network named VNet1 that contains the following settings: IPv4 address space: 172.16.10.0/24 Subnet name: Subnet1 Subnet address range: 172.16.10.0/25 What is the maximum number of virtual machines that can connect to Subnet1?

- **A.** 24
- **B.** 25
- **C.** 123 **← CORRETTA**
- **D.** 128
- **E.** 251

**Risposta corretta:** C

**Spiegazione:** Q512 · June 30, 2026 804/951

---

## Domanda 513
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a resource group named RG1 and a virtual network named VNet1. You plan to create an Azure container instance named container1. You need to be able to configure DNS name label scope reuse for container1. What should you configure for container1?

- **A.** the private networking type
- **B.** the public networking type **← CORRETTA**
- **C.** a new subnet on VNet1
- **D.** a confidential SKU

**Risposta corretta:** B

**Spiegazione:** To configure DNS name label scope reuse for an Azure container instance, you must use the public networking type. This allows the container instance to be accessed from the internet and ensures that the DNS name label is globally unique within Azure. The private networking type would not enable access from the public internet, making DNS name label scope reuse irrelevant in that context. Configuring a new subnet or selecting a confidential SKU does not relate to DNS name label scope reuse either. Q513 · June 30, 2026 805/951

---

## Domanda 514
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have the Azure virtual machines shown in the following table. VNET1, VNET2, and VNET3 are peered. VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table. The virtual networks are configured to use the DNS servers shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 806/951

**Risposta corretta:** From VM1, server1.contoso.com resolves to 131.107.3.3. -> No | From VM2, server1.contoso.com resolves to 131.107.3.3. -> Yes | From VM3, server2.contoso.com resolves to 131.107.2.4. -> No
> Immagini: q514_post0.png

**Spiegazione:** Q514 · June 30, 2026 807/951

---

## Domanda 515
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains a resource group named RG1. You plan to create an Azure Resource Manager (ARM) template to deploy a new virtual machine named VM1. VM1 must support the capture of performance data. You need to specify resource dependencies for the ARM template. In which order should you deploy the resources? To answer, move all resources from the list of resources to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. virtual network -> 2. network interface -> 3. virtual machine -> 4. Azure Monitor extension
> Immagini: q515_post0.png

**Spiegazione:** Q515 · June 30, 2026 808/951

---

## Domanda 516
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You are creating a new Azure container instance that will have the following settings: Container name: cont1 SKU: Standard OS type: Windows Networking type: Public Memory (GiB): 2.5 Number of CPU cores: 2 You discover that the Private setting for Networking type is unavailable. You need to ensure that cont1 can be configured to use private networking. Which setting should you change?

- **A.** Memory (GiB)
- **B.** Networking type
- **C.** Number of CPU cores
- **D.** OS type **← CORRETTA**
- **E.** SKU

**Risposta corretta:** D

**Spiegazione:** To ensure that the Azure container instance can be configured to use private networking, you need to change the OS type. Private networking for Azure Container Instances is only supported for Linux containers and not for Windows containers. The restriction on private networking applies specifically to the OS type, making it necessary to switch from a Windows-based container to a Linux-based container. 809/951 Q516 · June 30, 2026 810/951

---

## Domanda 517
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. All the virtual machines have only private IP addresses. You deploy an Azure Bastion host named Bastion1 to VNet1. To which virtual machines can you connect through Bastion1?

- **A.** VM1 only
- **B.** VM1 and VM2 only **← CORRETTA**
- **C.** VM1 and VM3 only 811/951
- **D.** VM1, VM2, and VM3

**Risposta corretta:** B
> Esibito: q517_pre0.png, q517_pre1.png

**Spiegazione:** Azure Bastion is a service that allows you to securely connect to virtual machines (VMs) in your virtual network (VNet) without exposing them to the public internet. Bastion can connect to VMs in different VNets if those VNets are peered. In this case, Bastion1 is deployed in VNet1, which is peered with VNet2. Therefore, it can connect to VM1 (located in VNet1) and VM2 (located in VNet2). However, VNet3 is only peered with VNet2 and not with VNet1. Without transitive peering or gateway transit, Bastion1 cannot connect to VM3. Thus, the correct answer is VM1 and VM2. Q517 · June 30, 2026 812/951

---

## Domanda 518
*Tipo: multiple_choice · fonte: text_layer*

You have the Azure virtual networks shown in the following table. Which virtual networks can you peer with VNet1?

- **A.** VNet2, VNet3, and VNet4
- **B.** VNet2 only
- **C.** VNet3 and VNet4 only **← CORRETTA**
- **D.** VNet2 and VNet3 only

**Risposta corretta:** C
> Esibito: q518_pre0.png

**Spiegazione:** You can peer virtual networks as long as their address spaces do not overlap. In this scenario, VNet1 has an address space of 10.11.0.0/16, which overlaps with VNet2's address space of 10.11.0.0/17. Due to this overlap, VNet1 cannot be peered with VNet2. VNet3 has an address space of 10.10.0.0/22, and VNet4 has an address space of 192.168.16.0/22, both of which do not overlap with VNet1's address space. Therefore, VNet1 can be peered with VNet3 and VNet4 only. Q518 · June 30, 2026 813/951

---

## Domanda 519
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You plan to migrate 50 virtual machines from VMware vSphere to the subscription. You create a Recovery Services vault. What should you do next?

- **A.** Configure an extended network.
- **B.** Create a recovery plan.
- **C.** Deploy an Open Virtualization Application (OVA) template to vSphere. **← CORRETTA**
- **D.** Configure a virtual network.

**Risposta corretta:** C

**Spiegazione:** After creating a Recovery Services vault, the next step to migrate VMware vSphere VMs to Azure is to deploy an Open Virtualization Application (OVA) template to vSphere. This step involves setting up the Azure Site Recovery Configuration Server using the provided OVA template. The configuration server is essential for managing the migration process, including VM discovery, data replication, and coordination of recovery operations. Q519 · June 30, 2026 814/951

---

## Domanda 520
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the virtual networks shown in the following table. Each virtual network has 50 connected virtual machines. You need to implement Azure Bastion. The solution must meet the fallowing requirements: Support host scaling. Support uploading and downloading files. Support the virtual machines on both VNet1 and VNet2. Minimize the number of addresses on the Azure Bastion subnet. How should you configure Azure Bastion? To answer, select the options in the answer area. NOTE: Each correct answer is worth one point.

**Risposta corretta:** Subnet size -> /26 | Public IP -> Standard SKU with a static allocation
> Immagini: q520_post0.png

**Spiegazione:** 815/951 Q520 · June 30, 2026 816/951

---

## Domanda 521
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the virtual networks shown in the following table. You need to ensure that all the traffic between VNet1 and VNet2 traverses the Microsoft backbone network. What should you configure?

- **A.** a private endpoint
- **B.** peering **← CORRETTA**
- **C.** Express Route
- **D.** a route table

**Risposta corretta:** B
> Esibito: q521_pre0.png

**Spiegazione:** To ensure that all traffic between VNet1 and VNet2 traverses the Microsoft backbone network, you should configure peering. Virtual network peering in Azure allows you to connect virtual networks seamlessly, making them appear as one for connectivity purposes. Traffic between virtual machines in peered virtual networks uses the Microsoft backbone infrastructure, ensuring efficient and optimized routing. This method leverages Azure's high-performance backbone infrastructure for inter-VNet traffic. Q521 · June 30, 2026 817/951

---

## Domanda 522
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. VNet1 has a VPN gateway that uses static routing, The on-premises network has a VPN connection that uses the VPN gateway of VNet1. You need to configure access for users on the on-premises network to connect to a virtual machine on VNet2. The solution must minimize costs. Which type of connectivity should you use?

- **A.** Azure Firewall with a private IP address
- **B.** service chaining and user-defined routes (UDRs) **← CORRETTA**
- **C.** Azure Application Gateway
- **D.** ExpressRoute circuits to VNet2

**Risposta corretta:** B

**Spiegazione:** Q522 · June 30, 2026 818/951

---

## Domanda 523
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. You have a Network Virtual Appliance (NVA) named NetVA1. You need to ensure that the traffic from VNet1 to VNet2 is inspected by using NetVA1. What should you use?

- **A.** a local network gateway
- **B.** a route table that has custom routes **← CORRETTA**
- **C.** a service endpoint
- **D.** IP address reservations

**Risposta corretta:** B

**Spiegazione:** Q523 · June 30, 2026 819/951

---

## Domanda 524
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that has a Recovery Services vault named Vault1. The subscription contains the virtual machines shown in the following table: You plan to schedule backups to occur every night at 23:00. Which virtual machines can you back up by using Azure Backup?

- **A.** VM1 and VM3 only
- **B.** VM1, VM2, VM3 and VM4 **← CORRETTA**
- **C.** VM1 and VM2 only
- **D.** VM1 only

**Risposta corretta:** B
> Esibito: q524_pre0.png

**Spiegazione:** Azure Backup supports the backup of 64-bit Windows Server operating systems from Windows Server 2008 onward, 64-bit Windows 10 operating systems, and 64-bit Ubuntu Server operating systems from Ubuntu 12.04 onward. The virtual machines can be backed up regardless of whether they are running or shut down. Therefore, all the listed virtual machines (VM1, VM2, VM3, and VM4) can be backed up using Azure Backup. Q524 · June 30, 2026 820/951

---

## Domanda 525
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual machine named VM1. You plan to deploy an Azure Monitor alert rule that will trigger an alert when CPU usage on VM1 exceeds 80 percent. You need to ensure that the alert rule sends an email message to two users named User1 and User2. What should you create for Azure Monitor?

- **A.** an action group **← CORRETTA**
- **B.** a mail-enabled security group
- **C.** a distribution group
- **D.** a Microsoft 365 group

**Risposta corretta:** A

**Spiegazione:** To ensure that the alert rule sends an email message to two users, you should create an action group in Azure Monitor. An action group is a collection of notification preferences and actions that are used by Azure Monitor to notify users when an alert is triggered. Action groups can be customized to send email notifications to specific users, making it the appropriate choice for this requirement. Q525 · June 30, 2026 821/951

---

## Domanda 526
*Tipo: multiple_choice · fonte: text_layer*

You have the Azure virtual machines shown in the following table: You have a Recovery Services vault that protects VM1 and VM2. You need to protect VM3 and VM4 by using Recovery Services. What should you do first?

- **A.** Create a new Recovery Services vault **← CORRETTA**
- **B.** Create a storage account
- **C.** Configure the extensions for VM3 and VM4
- **D.** Create a new backup policy

**Risposta corretta:** A
> Esibito: q526_pre0.png

**Spiegazione:** To protect VM3 and VM4 using Recovery Services, the first step is to create a new Recovery Services vault. This is necessary because VM1 and VM2 are in the West Europe region, whereas VM3 and VM4 are in the North Europe region. A Recovery Services vault needs to be in the same region as the virtual machines it is protecting to handle backup data efficiently. Therefore, to protect the VMs in North Europe, a new vault must be created in that region. Q526 · June 30, 2026 822/951

---

## Domanda 527
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains an Azure Storage account named storage1 and the users shown in the following table. You plan to monitor storage1 and to configure email notifications for the signals shown in the following table. You need to identify the minimum number of alert rules and action groups required for the planned monitoring. How many alert rules and action groups should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 823/951

**Risposta corretta:** Alert rules -> 4 | Action groups -> 3
> Immagini: q527_post0.png

**Spiegazione:** Q527 · June 30, 2026 824/951

---

## Domanda 528
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the identities shown in the following table. User1, Principal1, and Group1 are assigned the Monitoring Reader role. An action group named AG1 has the Email Azure Resource Manager Role notification type and is configured to email the Monitoring Reader role. You create an alert rule named Alert1 that uses AG1. You need to identity who will receive an email notification when Alert1 is triggered. Who should you identify?

- **A.** User1 and Principal1 only
- **B.** User1, User2, Principal1, and Principal2
- **C.** User1 only
- **D.** User1 and User2 only **← CORRETTA**

**Risposta corretta:** D
> Esibito: q528_pre0.png

**Spiegazione:** The alert rule is set to use the action group AG1, which is configured to email the Monitoring Reader role. Both User1 and User2 will receive the email notification. User1 is directly assigned the Monitoring Reader role, while User2 inherits this role through membership in Group1, which is assigned the Monitoring Reader role. Managed identities, such as Principal1 and Principal2, do not have associated email addresses and thus cannot receive email notifications. Therefore, emails will 825/951 only be sent to Azure AD user members of the Monitoring Reader role directly or through group membership, making User1 and User2 the recipients. Q528 · June 30, 2026 826/951

---

## Domanda 529
*Tipo: hotspot · fonte: manual_vision*

You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1. You create a backup policy named Policy1 as shown in the exhibit. (Click the Exhibit tab.) 827/951 You configure the backup of VM1 to use Policy1 on Thursday, January 1 at 1:00 AM. You need to identify the number of available recovery points for VM1. How many recovery points are available on January 8 and January 15? To answer, select the appropriate options in the answer area. 828/951 NOTE: Each correct selection is worth one point.

**Risposta corretta:** January 8 at 2:00 PM (14:00) -> 6 | January 15 at 2:00 PM (14:00) -> 8
> Immagini: q529_post0.png

**Spiegazione:** Box 1: 6 - 5 latest daily recovery points, which includes the weekly backup from the previous Sunday, plus the monthly recovery point. Box 2: 8 - 5 latest daily recovery points, plus two weekly backups, plus the monthly recovery point. Reference: https://social.technet.microsoft.com/Forums/en-US/854ab6ae-79aa-4bad-ac65-471c4d422e94/daily- monthly-yearly-recovery-points-and-storage-used? forum=windowsazureonlinebackup 829/951 Q529 · June 30, 2026 830/951

---

## Domanda 530
*Tipo: hotspot · fonte: manual_vision*

You have the web apps shown in the following table. You need to monitor the performance and usage of the apps by using Azure Application Insights. The solution must minimize modifications to the application code. What should you do on each app? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 831/951

**Risposta corretta:** App1 -> Install the Application Insights Agent | App2 -> Install the Application Insights Agent
> Immagini: q530_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps 832/951 Q530 · June 30, 2026 833/951

---

## Domanda 531
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine named VM1. You use Azure Backup to create a backup of VM1 named Backup1. After creating Backup1, you perform the following changes to VM1: Modify the size of VM1. Copy a file named Budget.xls to a folder named Data. Reset the password for the built-in administrator account. Add a data disk to VM1. An administrator uses the Replace existing option to restore VM1 from Backup1. You need to ensure that all the changes to VM1 are restored. Which change should you perform again?

- **A.** Modify the size of VM1.
- **B.** Reset the password for the built-in administrator account.
- **C.** Add a data disk.
- **D.** Copy Budget.xls to Data. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** Restoring a virtual machine from a backup using the 'Replace existing' option will revert the VM to its state at the time the backup was created. This means any changes made after the backup will be lost. Modifying the size of the VM, resetting the password, and adding a data disk do not need to be redone because the restore process either retains these changes or requires simple configuration tweaks. The file 'Budget.xls' copied to a folder named 'Data' after the backup will be lost and must be copied again to ensure it is available. 834/951 Q531 · June 30, 2026 835/951

---

## Domanda 532
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains the users shown in the following table. You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit. (Click the Password Reset tab.) You configure the authentication methods for password reset as shown in the Authentication Methods exhibit. (Click the Authentication Methods tab.) 836/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 837/951

**Risposta corretta:** After User2 answers three security questions correctly, he can reset his password immediately. -> No | If User1 forgets her password, she can reset the password by using the mobile phone app. -> No | User3 can add security questions to the password reset process -> No
> Immagini: q532_post0.png

**Spiegazione:** Q532 · June 30, 2026 838/951

---

## Domanda 533
*Tipo: multiple_choice · fonte: text_layer*

Your company has a main office in London that contains 100 client computers. Three years ago, you migrated to Azure Active Directory (Azure AD). The company's security policy states that all personal devices and corporate-owned devices must be registered or joined to Azure AD. A remote user named User1 is unable to join a personal device to Azure AD from a home network. You verify that User1 was able to join devices to Azure AD in the past. You need to ensure that User1 can join the device to Azure AD. What should you do?

- **A.** Assign the User administrator role to User1.
- **B.** From the Device settings blade, modify the Maximum number of devices per user setting. **← CORRETTA**
- **C.** Create a point-to-site VPN from the home network of User1 to Azure.
- **D.** From the Device settings blade, modify the Users may join devices to Azure AD setting.

**Risposta corretta:** B

**Spiegazione:** It is likely that the user has reached the maximum number of devices they are allowed to join to Azure AD. By default, the maximum number of devices per user is set to 50. If User1 has already joined the maximum number of devices, they would not be able to join any additional devices until one is removed or the limit is increased. Q533 · June 30, 2026 839/951

---

## Domanda 534
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have two Azure App Service app named App1 and App2. Each app has a production deployment slot and a test deployment slot. The Backup Configuration settings for the production slots are shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** On January 15, 2021, App1 will have only one backup in storage. -> No | On February 6, 2021, you can access the backup of the App2 test slot from January 15, 2021. -> No | On January 15, 2021, you can restore the App2 production slot backup from January 6 to the App2 test slot. -> Yes
> Immagini: q534_post0.png

**Spiegazione:** 840/951 Q534 · June 30, 2026 841/951

---

## Domanda 535
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant is synced to the on-premises Active Directory domain. The domain contains the users shown in the following table. You enable self-service password reset (SSPR) for all users and configure SSPR to have the following authentication methods: Number of methods required to reset: 2 Methods available to users: Mobile phone, Security questions Number of questions required to register: 3 Number of questions required to reset: 3 You select the following security questions: What is your favorite food? In what city was your first job? What was the name of your first pet? For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 842/951

**Risposta corretta:** SecAdmin1 must answer the following question during the self-service password reset: In what city was your first job? -> No | BillAdmin1 must answer the following question during the self-service password reset: What is your favorite food? -> No | User1 must answer the following question during the self-service password reset: What was the name of your first pet? -> Yes
> Immagini: q535_post0.png

**Spiegazione:** Q535 · June 30, 2026 843/951

---

## Domanda 536
*Tipo: multiple_choice · fonte: text_layer*

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com: User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com. You need to create new user accounts in external.contoso.onmicrosoft.com. Solution: You instruct User1 to create the user accounts. Does that meet the goal?

- **A.** Yes **← CORRETTA**
- **B.** No

**Risposta corretta:** A
> Esibito: q536_pre0.png

**Spiegazione:** User1, who is a Global Administrator, created the new Azure Active Directory tenant named external.contoso.onmicrosoft.com. As the creator and a Global Administrator of the new tenant, User1 automatically has the necessary permissions to create new user accounts within this tenant. Therefore, instructing User1 to create the user accounts in the new tenant meets the goal. 844/951 Q536 · June 30, 2026

---

## Domanda 537
*Tipo: multiple_choice · fonte: text_layer*

You have an existing Azure subscription that contains 10 virtual machines. You need to monitor the latency between your on-premises network and the virtual machines. What should you use?

- **A.** Service Map
- **B.** Connection troubleshoot
- **C.** Network Performance Monitor **← CORRETTA**
- **D.** Effective routes

**Risposta corretta:** C

**Spiegazione:** Network Performance Monitor is a comprehensive cloud-based network monitoring solution designed to measure the performance and latency across different parts of a network infrastructure, including between on-premises networks and Azure virtual machines. It provides detailed insights into network connectivity, helping detect issues before they impact users. Other options like Service Map, Connection troubleshoot, and Effective routes do not offer the same specific functionality for monitoring latency between on-premises networks and virtual machines on an ongoing basis. Q537 · June 30, 2026 845/951

---

## Domanda 538
*Tipo: hotspot · fonte: manual_vision*

You have an Azure App Service plan named ASP1. CPU usage for ASP1 is shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 846/951

**Risposta corretta:** The average CPU percentage is calculated [answer choice] per day -> four times | ASP1 must be [answer choice] to optimize CPU usage -> scaled up
> Immagini: q538_post0.png

**Spiegazione:** Box 1: four times - From the exhibit we see that the time granularity is 6 hours: Last 30 days (Automatic - 6 hours). CPU Percentage Last days Automatic - hours Box 2: scaled up - Scale up when: * You see that your workloads are hitting some performance limit such as CPU or I/O limits. * You need to quickly react to fix performance issues that can't be solved with classic database optimization. * You need a solution that allows you to change service tiers to adapt to changing latency requirements. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/metrics-troubleshoot https://azure.microsoft.com/en-us/overview/scaling-out-vs-scaling-up 847/951 Q538 · June 30, 2026 848/951

---

## Domanda 539
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure Linux virtual machine that is protected by Azure Backup. One week ago, two files were deleted from the virtual machine. You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. From the Azure portal, click File Recovery from the vault -> 2. Select a restore point that contains the deleted files -> 3. Download and run the script to mount a drive on the local computer -> 4. Copy the files by using File Explorer
> Nota: Le immagini dopo SUGGESTED ANSWER sono screenshot illustrativi dei passaggi; la sequenza e' quella indicata nella spiegazione
> Immagini: q539_post0.png, q539_post1.png, q539_post2.png

**Spiegazione:** Step 1: From the Azure portal, click File Recovery from the vault Step 2. Select a restore point that contains the deleted files Step 3: Download and run the script to mount a drive on the local computer Generate and download script to browse and recover files: 849/951 Step 4: Copy the files using File Explorer! After the disks are attached, use Windows File Explorer to browse the new volumes and files. The restore files functionality provides access to all files in a recovery point. Manage the files via File Explorer as you would for normal files. Step 1-3 below: To restore files or folders from the recovery point, go to the virtual machine and perform the following steps: 1. Sign in to the Azure portal and in the left pane, select Virtual machines. From the list of virtual machines, select the virtual machine to open that virtual machine's dashboard. 2. In the virtual machine's menu, select Backup to open the Backup dashboard. 3. In the Backup dashboard menu, select File Recovery. The File Recovery menu opens. 850/951 4. From the Select recovery point drop-down menu, select the recovery point that holds the files you want. By default, the latest recovery point is already selected. 5. Select Download Executable (for Windows Azure VMs) or Download Script (for Linux Azure VMs, a python script is generated) to download the software used to copy files from the recovery point. Running the script and identifying volumes: For Linux machines, a python script is generated. Download the script and copy it to the relevant/compatible Linux server. Reference: https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm 851/951 https://docs.microsoft.com/en-us/azure/backup/backup-azure-vms-automation#restore-files-from- an-azure-vm-backup Q539 · June 30, 2026 852/951

---

## Domanda 540
*Tipo: hotspot · fonte: manual_vision*

You purchase a new Azure subscription named Subscription1. You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup. You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Location in which to store the backups -> A Recovery Services vault | Object to use to configure the protection for VM1 -> A backup policy
> Immagini: q540_post0.png

**Spiegazione:** Box 1: A Recovery Services vault You can set up a Recovery Services vault and configure backup for multiple Azure VMs. Box 2: A backup policy - In Choose backup policy, do one of the following: ✑ Leave the default policy. This backs up the VM once a day at the time specified, and retains backups in the vault for 30 days. ✑ Select an existing backup policy if you have one. ✑ Create a new policy, and define the policy settings. 853/951 Reference: https://docs.microsoft.com/en-us/azure/backup/backup-azure-vms-first-look-arm Q540 · June 30, 2026 854/951

---

## Domanda 541
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure virtual machine named VM1. Azure collects events from VM1. You are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1. Which target resource should you monitor in the alert rule?

- **A.** virtual machine extension
- **B.** virtual machine **← CORRETTA**
- **C.** metric alert
- **D.** Azure Log Analytics workspace

**Risposta corretta:** B

**Spiegazione:** You should monitor the virtual machine because it is the source of the events being collected by Azure, specifically the System event log of VM1. By creating an alert rule on the virtual machine, Azure Monitor can continuously monitor the event logs on the virtual machine and trigger the alert rule when an error is detected. This ensures that alerts are generated based on the actual resource (the virtual machine) that is producing the event logs. Q541 · June 30, 2026 855/951

---

## Domanda 542
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains 100 virtual machines. You regularly create and delete virtual machines. You need to identify unattached disks that can be deleted. What should you do?

- **A.** From Azure Cost Management, view Cost Analysis
- **B.** From Azure Advisor, modify the Advisor configuration
- **C.** From Microsoft Azure Storage Explorer, view the Account Management properties
- **D.** From Azure Cost Management, view Advisor Recommendations **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To identify unattached disks that can be deleted in an Azure subscription, you should use Azure Cost Management and view Advisor Recommendations. Azure Advisor provides recommendations for optimizing your Azure resources, including identifying unused or unattached disks. This feature is accessible via the Cost Management section in the Azure portal, where you can find options to view these recommendations directly. Q542 · June 30, 2026 856/951

---

## Domanda 543
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure web app named webapp1. Users report that they often experience HTTP 500 errors when they connect to webapp1. You need to provide the developers of webapp1 with real-time access to the connection errors. The solution must provide all the connection error details. What should you do first?

- **A.** From webapp1, enable Web server logging
- **B.** From Azure Monitor, create a workbook
- **C.** From Azure Monitor, create a Service Health alert
- **D.** From webapp1, turn on Application Logging **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To provide real-time access to connection errors and detailed information about HTTP 500 errors, you should turn on Application Logging for the web app. Application logging captures detailed data about the application's behavior and errors, which is critical for developers to diagnose and troubleshoot internal server errors (HTTP 500). Therefore, enabling Application Logging on webapp1 will give the developers the necessary insights into the connection errors they are experiencing. Q543 · June 30, 2026 857/951

---

## Domanda 544
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure web app named App1. You need to monitor the availability of App1 by using a multi-step web test. What should you use in Azure Monitor?

- **A.** Azure Service Health
- **B.** Azure Application Insights **← CORRETTA**
- **C.** the Diagnostic settings
- **D.** metrics

**Risposta corretta:** B

**Spiegazione:** To monitor the availability of an Azure web app using a multi-step web test, Azure Application Insights is the correct tool to use. It allows you to create and run multi-step web tests, which can monitor the application's availability by simulating a sequence of user interactions. This can help you detect issues in your application and ensure it performs as expected. Q544 · June 30, 2026 858/951

---

## Domanda 545
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that has diagnostic logging enabled and is configured to send logs to a Log Analytics workspace. You are investigating a service outage. You need to view the event time, the event name, and the affected resources. How should you complete the query? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Box 1 (tabella sorgente) -> AzureActivity | Box 2 (operatore) -> | project
> Nota: Query completa: AzureActivity | Where Level == 'Critical' | project TimeGenerated, OperationNameValue, _ResouceId
> Immagini: q545_post0.png

**Spiegazione:** Box 1: AzureActivity - The AzureActivity table has entries from the Azure activity log, which provides insight into subscription-level or management group-level events occuring in Azure. Let's see only Critical entries during a specific week. The where operator is common in the Kusto Query Language. where filters a table to rows that match specific criteria. The following example uses multiple commands. First, the query retrieves all records for the table. Then, it filters the data for only records that are in the time range. Finally, it filters those results for only records that have a Critical level. 859/951 AzureActivity - | where TimeGenerated > datetime(10-01-2020) and TimeGenerated < datetime(10-07-2020) | where Level == 'Critical' Incorrect: not Perf: The Perf table has performance data that's collected from virtual machines that run the Log Analytics agent. Box 2: | project - Select a subset of columns: project. Use project to include only the columns you want. Building on the preceding example, let's limit the output to certain columns: AzureActivity - | where TimeGenerated > datetime(10-01-2020) and TimeGenerated < datetime(10-07-2020) | where Level == 'Critical' | project TimeGenerated, Level, OperationNameValue, ResourceGroup, _ResourceId Reference: https://github.com/MicrosoftDocs/dataexplorer-docs/blob/main/data- explorer/kusto/query/tutorial.md Q545 · June 30, 2026 860/951

---

## Domanda 546
*Tipo: multiple_choice · fonte: text_layer*

You have a Recovery Services vault named RSV1. RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days. RSV1 performs daily backups of VM1. VM1 hosts a static website that was updated eight days ago. You need to recover VM1 to a point eight days ago. The solution must minimize downtime. What should you do first?

- **A.** Deallocate VM1.
- **B.** Restore VM1 by using the Replace existing restore configuration option.
- **C.** Delete VM1.
- **D.** Restore VM1 by using the Create new restore configuration option. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To minimize downtime, you should first restore VM1 by using the Create new restore configuration option. This creates a new VM from the backup taken eight days ago without affecting the currently running VM. Once the new VM is up and running, you can test it to ensure it meets your requirements. Once confirmed, you can then switch over to the new VM, which results in minimal disruption to the current live environment. This approach avoids taking the existing VM offline during the restoration process, thereby minimizing downtime as required. Q546 · June 30, 2026 861/951

---

## Domanda 547
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. You plan to create a data collection rule named DCR1 in Azure Monitor. Which resources can you set as data sources in DCR1, and which resources can you set as destinations in DCR1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 862/951

**Risposta corretta:** Data sources -> VM1 only | Destinations -> Workspace1 only
> Immagini: q547_post0.png

**Spiegazione:** Box 1: VM1 only - A virtual machine may have an association to multiple DCRs, and a DCR may have multiple virtual machines associated to it. In the Resources tab, add the resources (virtual machines, virtual machine scale sets, Arc for servers) that should have the Data Collection Rule applied. Box 2: Workspace1 only - On the Destination tab, add one or more destinations for the data source. You can select multiple destinations of same of different types, for instance multiple Log Analytics workspaces (i.e. "multi-homing"). Note: The Data Collection Rules (or DCR) improve on a few key areas of data collection from VMs including like better control and scoping of data collection (e.g. collect from a subset of VMs for a single workspace), collect once and send to both Log Analytics and Azure Monitor Metrics, send to multiple workspaces (multi- homing for Linux), improved Windows event filtering, and improved extension management. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/agents/data-collection-rule-azure-monitor- agent Q547 · June 30, 2026 863/951

---

## Domanda 548
*Tipo: hotspot · fonte: manual_vision*

You have the role assignment file shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. 864/951

**Risposta corretta:** [Answer choice] assigned the Owner role for VM1 -> User1 and User3 are | [Answer choice] can create a virtual machine in RG1 -> User1 and User4
> Immagini: q548_post0.png

**Spiegazione:** Q548 · June 30, 2026 865/951

---

## Domanda 549
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have the following custom role-based access control (RBAC) role. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 866/951

**Risposta corretta:** Users that are assigned Role1 can assign Role1 to users. -> No | Users that are assigned Role1 can deploy new virtual machines. -> Yes | Users that are assigned Role1 can set a static IP address on a virtual machine. -> Yes
> Immagini: q549_post0.png

**Spiegazione:** Q549 · June 30, 2026 867/951

---

## Domanda 550
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the resources shown in the following table. NSG1 is configured as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 868/951

**Risposta corretta:** VM1 can access storage1. -> Yes | VM2 can access VM1 by using the HTTPS protocol. -> Yes | The security rules for NSG1 apply to any virtual machine on VNET1. -> No
> Immagini: q550_post0.png

**Spiegazione:** Q550 · June 30, 2026 869/951

---

## Domanda 551
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1. On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1. You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2. You need to ensure that you can connect Client1 to VNet2. What should you do?

- **A.** Select Use the remote virtual network's gateway or Route Server on VNet1 to VNet2 peering.
- **B.** Select Use the remote virtual network s gateway or Route Server on VNet2 to VNet1 peering.
- **C.** Download and re-install the VPN client configuration package on Client1. **← CORRETTA**
- **D.** Enable BGP on VPNGW1.

**Risposta corretta:** C

**Spiegazione:** When you make changes to the topology of your network, such as configuring virtual network peering, the VPN client configuration package on Windows clients must be downloaded and installed again. This ensures that the VPN client has the updated configuration required to route traffic correctly. Reinstalling the VPN client package will apply the necessary changes to allow Client1 to connect to VNet2. Q551 · June 30, 2026 870/951

---

## Domanda 552
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2. You have the resource groups shown in the following table. You have the virtual machines shown in the following table. You assign roles to users as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 871/951

**Risposta corretta:** User1 can sign in to VM1. -> No | User2 can manage disks and disk snapshots of VM1. -> No | User2 can manage disks and disk snapshots of VM3. -> No
> Immagini: q552_post0.png

**Spiegazione:** Q552 · June 30, 2026 872/951

---

## Domanda 553
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure Active Directory (Azure AD) tenant that is linked to 10 Azure subscriptions. You need to centrally monitor user activity across all the subscriptions. What should you use?

- **A.** Azure Application Insights Profiler
- **B.** access reviews
- **C.** Activity log filters
- **D.** a Log Analytics workspace **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To centrally monitor user activity across all Azure subscriptions linked to an Azure AD tenant, you should use a Log Analytics workspace. Log Analytics allows you to consolidate and analyze logs from multiple subscriptions and resources in a single location, providing a centralized view of user activity. Q553 · June 30, 2026 873/951

---

## Domanda 554
*Tipo: drag_and_drop · fonte: manual_vision*

You have an Azure subscription that contains a virtual machine name VM1. VM1 has an operating system disk named Disk1 and a data disk named Disk2. You need to back up Disk2 by using Azure Backup. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Create an Azure Backup vault -> 2. Create a backup policy and configure the backup -> 3. Configure a managed identity
> Immagini: q554_post0.png

**Spiegazione:** Q554 · June 30, 2026 874/951

---

## Domanda 555
*Tipo: multiple_choice · fonte: text_layer*

You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1. NSG1 only contains the default rules. You need to create a rule in NSG1 to prevent the hosts on Subnet1 form connecting to the Azure portal. The hosts must be able to connect to other internet hosts. To what should you set Destination in the rule?

- **A.** Application security group
- **B.** IP Addresses **← CORRETTA**
- **C.** Service Tag
- **D.** Any

**Risposta corretta:** B

**Spiegazione:** To create a rule in NSG1 to prevent hosts on Subnet1 from connecting to the Azure portal while allowing them to connect to other internet hosts, you should set the Destination in the rule to IP Addresses. The Azure portal can be accessed via a specific set of IP addresses. By creating a rule in NSG1 that blocks traffic to these IP addresses, you can effectively prevent hosts on Subnet1 from accessing the Azure portal while still allowing them to connect to other internet hosts. Using general tags or groups like service tags or application security groups would not provide the precise control needed for this task. Q555 · June 30, 2026 875/951

---

## Domanda 556
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error events from a table named Event. Which query should you run in Workspace1?

- **A.** search in (Event) "error" **← CORRETTA**
- **B.** Event | where EventType is "error"
- **C.** select * from Event where EventType == "error"
- **D.** Get-Event Event | where {$_.EventType == "error"}

**Risposta corretta:** A

**Spiegazione:** To view error events from the table named 'Event' in Azure Log Analytics, you should use the 'search' operator to look for errors within the specified table. The correct query would be 'search in (Event) "error"' because it searches for the word 'error' within the 'Event' table. Other options either use incorrect syntax or are not typically used in Azure Log Analytics queries. Q556 · June 30, 2026 876/951

---

## Domanda 557
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure App Service web app named App1. You need to collect performance traces for App1. What should you use?

- **A.** Azure Application Insights Profiler **← CORRETTA**
- **B.** the Activity log
- **C.** the Deployment center
- **D.** the Diagnose and solve problems settings

**Risposta corretta:** A

**Spiegazione:** Azure Application Insights Profiler is the correct tool to use when you need to collect performance traces for an Azure App Service web app. This service allows you to capture detailed performance traces and diagnostics data for your application, helping you to analyze and optimize its performance. The Activity log is primarily used for tracking management-level events and operations in your Azure resources, the Deployment center is for managing deployment sources, and the Diagnose and solve problems settings are for troubleshooting issues but not specifically for collecting performance traces. Q557 · June 30, 2026 877/951

---

## Domanda 558
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains the storage accounts shown in the following table. You deploy a web app named App1 to the West US Azure region. You need to back up App1. The solution must minimize costs. Which storage account should you use as the target for the backup?

- **A.** storage1
- **B.** storage2 **← CORRETTA**
- **C.** storage3
- **D.** storage4

**Risposta corretta:** B
> Esibito: q558_pre0.png

**Spiegazione:** To minimize costs when backing up App1, which is located in the West US region, it is best to use a storage account in the same region to avoid additional data transfer costs. Storage2 is a BlobStorage account located in West US, making it a suitable option for storing backups. BlobStorage is generally a cost-effective choice for storing large amounts of unstructured data, which aligns with the need to back up a web application. Q558 · June 30, 2026 878/951

---

## Domanda 559
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains two users named User1 and User2. The subscription contains the resources shown in the following table. The subscription contains the alert rules shown in the following table. The users perform the following action: User1 creates a new virtual disk and attaches the disk to VM1 User2 creates a new resource tag and assigns the tag to RG1 and VM1 Which alert rules are triggered by each user? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. 879/951

**Risposta corretta:** User1 -> Alert1 and Alert2 are triggered | User2 -> Alert1 and Alert2 are triggered
> Immagini: q559_post0.png

**Spiegazione:** 880/951 Q559 · June 30, 2026

---

## Domanda 560
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains multiple virtual machines in the West US Azure region. You need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine traffic. Which two resources should you create? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.

- **A.** a Log Analytics workspace **← CORRETTA**
- **B.** an Azure Monitor workbook
- **C.** a storage account **← CORRETTA**
- **D.** a Microsoft Sentinel workspace
- **E.** a Data Collection Rule (DCR) in Azure Monitor

**Risposta corretta:** A, C

**Spiegazione:** To use Traffic Analytics in Azure Network Watcher, you need to monitor and analyze network traffic data collected from various sources. A Log Analytics workspace is essential as it stores and analyzes the network traffic data. Additionally, a storage account is necessary for NSG flow logs, which are utilized by Traffic Analytics for deeper insights into traffic flow in the Azure environment. These NSG flow logs require storing in a storage account before being analyzed by Traffic Analytics. Q560 · June 30, 2026 881/951

---

## Domanda 561
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains eight virtual machines and the resources shown in the following table. You need to configure access for VNET1. The solution must meet the following requirements: The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft backbone. The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone. What is the minimum number of service endpoints you should add to VNET1?

- **A.** 1
- **B.** 2 **← CORRETTA**
- **C.** 3
- **D.** 5

**Risposta corretta:** B
> Esibito: q561_pre0.png

**Spiegazione:** To enable communication between VNET1 and VNET2 using the Microsoft backbone, you would typically use VNet peering, which doesn't require service endpoints. To enable VMs in VNET1 to access storage accounts over Microsoft's backbone, you would need a service endpoint for Microsoft.Storage. Azure Active Directory (Azure AD) does not support service endpoints natively. 882/951 Therefore, only one service endpoint for Microsoft.Storage is necessary for the storage accounts. So, the minimum number of service endpoints required is 2: Microsoft.Storage for the storage accounts and Microsoft.KeyVault for the Key Vault. Q561 · June 30, 2026

---

## Domanda 562
*Tipo: multiple_choice · fonte: text_layer*

You need to configure an Azure web app named contoso.azurewebsites.net to host www.contoso.com. What should you do first?

- **A.** Create A records named www.contoso.com and asuid.contoso.com.
- **B.** Create a TXT record named asuid that contains the domain verification ID. **← CORRETTA**
- **C.** Create a CNAME record named asuid that contains the domain verification ID.
- **D.** Create a TXT record named www.contoso.com that has a value of contoso.azurewebsites.net.

**Risposta corretta:** B

**Spiegazione:** To configure an Azure web app to host a custom domain like www.contoso.com, the first step involves verifying ownership of the domain. This is done by creating a TXT record named asuid at your domain registrar with the value set to the domain verification ID provided by Azure. This step is necessary to prove that you own the domain before you can point it to your Azure web app. Q562 · June 30, 2026 883/951

---

## Domanda 563
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named Workspace1. Each NSG is connected to a virtual machine. You need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected. What should you do first?

- **A.** Deploy Connection Monitor.
- **B.** Configure data collection endpoints.
- **C.** Configure a private link.
- **D.** Configure NSG flow logs. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected, the first step is to configure NSG flow logs. NSG flow logs provide essential information about traffic that is allowed or denied by the Network Security Group, which enables the monitoring and analysis of network traffic. This is crucial for identifying and alerting on any suspicious network activity. Q563 · June 30, 2026 884/951

---

## Domanda 564
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription named Sub1 that contains the resources shown in the following table. Sub1 contains the following alert rule: Name: Alert1 Scope: All resource groups in Sub1 Include all future resources Condition: All administrative operations Actions: Action1 Sub1 contains the following alert processing rule: Name: Rule1 Scope: Sub1 Rule type: Suppress notifications Apply the rule: On a specific time Start: August 10, 2022 End: August 13, 2022 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** If you create a resource group in Sub1 on August 11, 2022, Alert1 is listed in the Azure portal. -> Yes | If you create a resource group in Sub1 on August 12, 2022, an email message is sent to admin1@contoso.com. -> No | If you add a tag to RG1 on August 15, 2022, an email message is sent to admin1@contoso.com. -> Yes
> Immagini: q564_post0.png

**Spiegazione:** 885/951 Q564 · June 30, 2026 886/951

---

## Domanda 565
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a storage account named storage1 in the North Europe Azure region. You need to ensure that when blob data is added to storage1, a secondary copy is created in the East US region. The solution must minimize administrative effort. What should you configure?

- **A.** operational backup
- **B.** object replication **← CORRETTA**
- **C.** geo-redundant storage (GRS)
- **D.** a lifecycle management rule

**Risposta corretta:** B

**Spiegazione:** To ensure that when blob data is added to storage1 in the North Europe Azure region, a secondary copy is created in the East US region, you should configure object replication. Object replication allows you to specify both the source and destination storage accounts, enabling efficient and flexible replication of data across different regions. In contrast, geo-redundant storage (GRS) replicates data to a paired region predetermined by Azure, which would be West Europe in the case of North Europe. Q565 · June 30, 2026 887/951

---

## Domanda 566
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains two Log Analytics workspaces named Workspace1 and Workspace2 and 100 virtual machines that run Windows Server. You need to collect performance data and events from the virtual machines. The solution must meet the following requirements: Logs must be sent to Workspace1 and Workspace 2. All Windows events must be captured. All security events must be captured. What should you install and configure on each virtual machine?

- **A.** the Azure Monitor agent **← CORRETTA**
- **B.** the Windows Azure diagnostics extension (WAD)
- **C.** the Windows VM agent

**Risposta corretta:** A

**Spiegazione:** To collect performance data and events from the virtual machines and send logs to two Log Analytics workspaces, the Azure Monitor agent should be installed and configured on each virtual machine. The Azure Monitor agent is designed for collecting and sending telemetry data to Azure Monitor and supports collecting performance data, Windows events, and security events. It can be configured to send data to multiple Log Analytics workspaces. Q566 · June 30, 2026 888/951

---

## Domanda 567
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual machine named VM1 and an Azure function named App1. You need to create an alert rule that will run App1 if VM1 stops. What should you create for the alert rule?

- **A.** an application security group
- **B.** a security group that has dynamic device membership
- **C.** an action group **← CORRETTA**
- **D.** an application group

**Risposta corretta:** C

**Spiegazione:** To create an alert rule that triggers the Azure function App1 when the virtual machine VM1 stops, you need to use an action group. An action group is a collection of actions that can be triggered by an alert, such as running an Azure function, sending email notifications, or creating a support ticket. By associating an action group with the alert rule, you automate the response to the condition that an alert identifies, ensuring that App1 runs automatically when VM1 stops. Q567 · June 30, 2026 889/951

---

## Domanda 568
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters. You need to create a dashboard to display detailed metrics and a visual representation of the network topology. What should you use?

- **A.** Azure Monitor Network Insights **← CORRETTA**
- **B.** a Data Collection Rule (DCR)
- **C.** Azure Virtual Network Watcher
- **D.** Log Analytics

**Risposta corretta:** A

**Spiegazione:** To create a dashboard to display detailed metrics and a visual representation of the network topology for Azure virtual networks and ExpressRoute circuits, Azure Monitor Network Insights is the appropriate tool. Azure Monitor Network Insights provides a comprehensive, visual representation through topologies, displaying health and metrics for all deployed network resources. It eliminates the need for additional configuration and offers network diagnostic features, making it ideal for the requirements stated. Q568 · June 30, 2026 890/951

---

## Domanda 569
*Tipo: multiple_choice · fonte: text_layer*

You deploy Azure virtual machines to three Azure regions Each region contains a virtual network. Each virtual network contains multiple subnets peered in a full mesh topology. Each subnet contains a network security group (NSG) that has defined rules. A user reports that he cannot use port 33000 to connect from a virtual machine in one region to a virtual machine in another region. Which two options can you use to diagnose the issue? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.

- **A.** Azure Virtual Network Manager
- **B.** IP flow verify **← CORRETTA**
- **C.** Azure Monitor Network Insights
- **D.** Connection troubleshoot **← CORRETTA**
- **E.** elective security rules

**Risposta corretta:** B, D

**Spiegazione:** To diagnose connectivity issues between virtual machines across Azure regions, particularly when port 33000 is involved, you can use both IP flow verify and Connection troubleshoot. IP flow verify helps check if traffic is being allowed or denied based on network security group (NSG) rules, providing insight into whether a specific rule is blocking the traffic. Connection troubleshoot provides the capability to test direct TCP connections between virtual machines, helping identify whether the issue lies within the NSGs, firewall rules, or any other network configuration. Together, these tools provide a comprehensive approach to diagnosing connectivity issues in a complex network environment. 891/951 Q569 · June 30, 2026

---

## Domanda 570
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. You need to receive an email alert when a resource lock is removed from any resource in the subscription. What should you use to create an activity log alert in Azure Monitor?

- **A.** a resource, a condition, and an action group **← CORRETTA**
- **B.** a resource, a condition, and a Microsoft 365 group
- **C.** a Log Analytics workspace, a resource, and an action group
- **D.** a data collection endpoint, an application security group, and a resource group

**Risposta corretta:** A

**Spiegazione:** To create an activity log alert in Azure Monitor, you should specify the resources to be monitored, define the condition that triggers the alert, and set up an action group that will execute actions such as sending email notifications. This configuration allows you to receive alerts when specific actions, such as the removal of a resource lock, occur within your Azure subscription. Q570 · June 30, 2026 892/951

---

## Domanda 571
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the alerts shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** For Alert1, User response [answer choice]. -> can be changed to New or Acknowledged | For Alert2, User response [answer choice]. -> can be changed to Acknowledged or Closed
> Immagini: q571_post0.png

**Spiegazione:** 893/951 Q571 · June 30, 2026 894/951

---

## Domanda 572
*Tipo: hotspot · fonte: manual_vision*

You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit: 895/951 896/951 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.

**Risposta corretta:** The backup that occurs on Sunday, March 1, will be retained for [answer choice]. -> 10 years | The backup that occurs on Sunday, November 1, will be retained for [answer choice]. -> 36 months
> Immagini: q572_post0.png

**Spiegazione:** Q572 · June 30, 2026 897/951

---

## Domanda 573
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains the vaults shown in the following table. You deploy the virtual machines shown in the following table. You have the backup policies shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. 898/951

**Risposta corretta:** VM1 can be backed up by using Policy1. -> Yes | VM2 can be backed up by using Policy3. -> No | VM2 can be backed up by using Policy2. -> Yes
> Immagini: q573_post0.png

**Spiegazione:** Q573 · June 30, 2026 899/951

---

## Domanda 574
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1. You plan to configure Azure Monitor for VM Insights. You need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1. What should you create first?

- **A.** a data collection rule (DCR)
- **B.** a Log Analytics workspace
- **C.** an Azure Monitor Private Link Scope (AMPLS) **← CORRETTA**
- **D.** a private endpoint

**Risposta corretta:** C

**Spiegazione:** To ensure that all the virtual machines only communicate with Azure Monitor through VNet1, you should create an Azure Monitor Private Link Scope (AMPLS) first. This allows you to define the set of Azure Monitor resources that can be accessed through a private endpoint. By creating the AMPLS, you can then configure a private endpoint within VNet1 to ensure secure and private communication between the virtual machines and Azure Monitor, without exposure to the public internet. Q574 · June 30, 2026 900/951

---

## Domanda 575
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains the vaults shown in the following table. You create a storage account that contains the resources shown in the following table. To which vault can you back up cont1 and share1? To answer, select the appropriate options in the answer area. NOTE: Each correct answer is worth one point. 901/951

**Risposta corretta:** cont1 -> Backup1 only | share1 -> Recovery1 only
> Immagini: q575_post0.png

**Spiegazione:** Q575 · June 30, 2026 902/951

---

## Domanda 576
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains an Azure Stream Analytics job named Job1. You need to monitor input events for Job1 to identify the number of events that were NOT processed.Which metric should you use?

- **A.** Out-of-Order Events
- **B.** Output Events
- **C.** Late Input Events
- **D.** Backlogged Input Events **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To monitor input events for an Azure Stream Analytics job and identify the number of events that were NOT processed, you should use the 'Backlogged Input Events' metric. This metric represents the number of input events that are waiting to be processed due to issues such as query errors, throttling, or other processing limitations. A nonzero value for this metric implies that your job can't keep up with the number of incoming events, indicating unprocessed events. Q576 · June 30, 2026 903/951

---

## Domanda 577
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains an Azure SQL database named DB1. You plan to use Azure Monitor to monitor the performance of DB1. You must be able to run queries to analyze log data. Which destination should you configure in the Diagnostic settings of DB1?

- **A.** Send to a Log Analytics workspace. **← CORRETTA**
- **B.** Archive to a storage account.
- **C.** Stream to an Azure event hub.

**Risposta corretta:** A

**Spiegazione:** To monitor the performance of an Azure SQL database and be able to run queries to analyze log data, you should configure the Diagnostic settings to send the logs to a Log Analytics workspace. This allows you to use Azure Monitor Logs to run queries and perform detailed analyses of the collected log data. Q577 · June 30, 2026 904/951

---

## Domanda 578
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. The subscription contains virtual machines that run Windows Server. You have a data collection rule (DCR) named Rule1. You plan to use the Azure Monitor Agent to collect events from Windows System event logs. You only need to collect system events that have an ID of 1001. Which type of query should you use for the data source in Rule1?

- **A.** SQL
- **B.** XPath **← CORRETTA**
- **C.** KQL

**Risposta corretta:** B

**Spiegazione:** To collect events from Windows System event logs that have a specific Event ID, you should use an XPath query. XPath is designed for querying XML documents, and Windows Event Logs are formatted as XML. This allows you to precisely filter the events you want to collect based on attributes like Event ID. SQL is used for querying relational databases and is not applicable here. KQL is used for querying data in Azure Monitor logs and would typically be used after data collection, not for setting up the data collection rule itself. Q578 · June 30, 2026 905/951

---

## Domanda 579
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that contains a virtual machine named VM1. You have an on-premises datacenter that contains a domain controller named DC1. ExpressRoute is used to connect the on-premises datacenter to Azure. You need to use Connection Monitor to identify network latency between VM1 and DC1. What should you install on DC1?

- **A.** the Azure Connected Machine agent for Azure Arc-enabled servers
- **B.** the Azure Network Watcher Agent virtual machine extension
- **C.** the Log Analytics agent **← CORRETTA**
- **D.** an Azure Monitor agent extension

**Risposta corretta:** C

**Spiegazione:** To make Connection Monitor recognize on-premises machines as sources for monitoring, the Log Analytics agent must be installed on those machines. The agent enables network performance monitoring by capturing necessary telemetry and linking it to Log Analytics workspaces. This allows Connection Monitor to evaluate network latency and other metrics between Azure-based and on- premises resources. Q579 · June 30, 2026 906/951

---

## Domanda 580
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription that has Traffic Analytics configured. You deploy a new virtual machine named VM1 that has the following settings: Region: East US Virtual network: VNet1 NIC network security group: NSG1 You need to monitor VM1 traffic by using Traffic Analytics. Which settings should you configure?

- **A.** Diagnostic settings for VM1
- **B.** NSG flow logs for NSG1 **← CORRETTA**
- **C.** Diagnostic settings for NSG1
- **D.** Insights for VM1

**Risposta corretta:** B

**Spiegazione:** To monitor the traffic of a virtual machine using Traffic Analytics in Azure, it is necessary to enable NSG flow logs for the network security group associated with the VM's network interface. The flow logs capture detailed information about the traffic passing through the network security group, which Traffic Analytics then uses to analyze network activity. In this case, enabling NSG flow logs for NSG1, which is associated with VM1, is the correct setting to configure. Q580 · June 30, 2026 907/951

---

## Domanda 581
*Tipo: multiple_choice · fonte: text_layer*

You have an Azure subscription. The subscription contains 10 virtual machines that run Windows Server. Each virtual machine hosts a website in IIS and has the Azure Monitor Agent installed. You need to collect the IIS logs from each virtual machine and store them in a Log Analytics workspace. What should you configure first?

- **A.** a data collection endpoint
- **B.** an Azure Monitor Private Link Scope (AMPLS)
- **C.** Diagnostic settings **← CORRETTA**
- **D.** VM insights
- **E.** a private endpoint

**Risposta corretta:** C

**Spiegazione:** To collect and forward IIS logs to a Log Analytics workspace, you need to configure Diagnostic settings on each virtual machine. Diagnostic settings allow you to specify the types of data to collect, including IIS logs, and to define the destination where this data will be sent, such as a Log Analytics workspace. Q581 · June 30, 2026 908/951

---

## Domanda 582
*Tipo: hotspot_yes_no · fonte: manual_vision*

You have an Azure subscription that contains two storage accounts named contoso101 and contoso102. The subscription contains the virtual machines shown in the following table. VNet1 has service endpoints configured as shown in the Service endpoints exhibit. (Click the Service endpoints tab.) The Microsoft.Storage service endpoint has the service endpoint policy shown in the Microsoft.Storage exhibit. (Click the Microsoft.Storage tab.) 909/951 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** VM1 can access contoso102. -> No | VM2 can access contoso101. -> No | VM2 uses a private IP address to access Azure AD. -> Yes
> Immagini: q582_post0.png

**Spiegazione:** 910/951 Q582 · June 30, 2026 911/951

---

## Domanda 583
*Tipo: hotspot · fonte: manual_vision*

You have an Azure subscription that contains an Azure Backup vault named Backup1, a Recovery Services vault named Recovery1, and the resources shown in the following table. You plan to back up the resources. Which resource can be backed up to Backup1, and which resource can be backed up to Recovery1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Backup1 -> Disk1 | Recovery1 -> VM1
> Immagini: q583_post0.png

**Spiegazione:** 912/951 Q583 · June 30, 2026 913/951

---

## Domanda 584
*Tipo: hotspot · fonte: manual_vision*

Case study - This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided. To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study. At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section. To start the case study - To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question. Overview - ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York. Existing Environment - Azure Environment - ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3. The subscription contains the storage accounts shown in the following table. 914/951 The subscription contains the virtual machines shown in the following table. The subscription has an Azure container registry that contains the images shown in the following table. The subscription contains the resources shown in the following table. Azure Key Vault - The subscription contains an Azure key vault named Vault1. Vault1 contains the certificates shown in the following table. Vault1 contains the keys shown in the following table. 915/951 Microsoft Entra Environment - ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table. The tenant contains the groups shown in the following table. The adatum.com tenant has a custom security attribute named Attribute1. Planned Changes - ADatum plans to implement the following changes: Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4. In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage Whenever possible, use directories to organize storage account content. Grant User1 the permissions required to link Zone1 to VNet1. Assign Attribute1 to supported adatum.com resources. In storage2, create an encryption scope named Scope1. Deploy new containers by using Image1 or Image2. Technical Requirements - ADatum must meet the following technical requirements: Use TLS for WebApp1. 916/951 Follow the principle of least privilege. Grant permissions at the required scope only. Ensure that Scope1 is used to encrypt storage services. Use Azure Backup to back up cont1 and share1 as frequently as possible. Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines. You need to configure Azure Backup to meet the technical requirements for cont1 and share1. To what should you set the backup frequency for each resource? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** cont1 -> Daily | share1 -> Every 4 hours
> Immagini: q584_post0.png

**Spiegazione:** 917/951 Q584 · June 30, 2026 918/951

---

## Domanda 585
*Tipo: hotspot · fonte: manual_vision*

You need to configure the Device settings to meet the technical requirements and the user requirements. Which two settings should you modify? To answer, select the appropriate settings in the answer area. 919/951

**Risposta corretta:** Users may join devices to Azure AD -> Selected | Require Multi-Factor Auth to join devices -> Yes
> Immagini: q585_post0.png

**Spiegazione:** Box 1: Selected - Only selected users should be able to join devices Box 2: Yes - 920/951 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity. Q585 · June 30, 2026 921/951

---

## Domanda 586
*Tipo: multiple_choice · fonte: text_layer*

You need to meet the user requirement for Admin1. What should you do?

- **A.** From the Azure Active Directory blade, modify the Groups
- **B.** From the Azure Active Directory blade, modify the Properties
- **C.** From the Subscriptions blade, select the subscription, and then modify the Access control (IAM) settings **← CORRETTA**
- **D.** From the Subscriptions blade, select the subscription, and then modify the Properties

**Risposta corretta:** C

**Spiegazione:** To meet the user requirement of designating Admin1 as the service admin for the Azure subscription, you should navigate to the Subscriptions blade and select the subscription. From there, you should modify the Access control (IAM) settings. This is where you manage role assignments including the Service Administrator role. The Service Administrator role has full access to the Azure portal and can manage services within the subscription. As per the latest updates, managing classic administrators, including changing the Service Administrator, is now done through IAM settings. Q586 · June 30, 2026 922/951

---

## Domanda 587
*Tipo: hotspot · fonte: manual_vision*

You need to configure Azure Backup to back up the file shares and virtual machines. What is the minimum number of Recovery Services vaults and backup policies you should create? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Recovery Services vaults -> 3 | Backup policies -> 6
> Immagini: q587_post0.png, q587_post1.png, q587_post2.png

**Spiegazione:** Box 1: 3 - If you have data sources in multiple regions, create a Recovery Services vault for each region. The File Shares and VMs are located in three Regions: West US, East US, Central US. 923/951 Box 2: 6 - A backup policy is scoped to a vault. For each vault we need one backup policy for File Shares and one backup policy for VM. Note: Back up the Azure file shares and virtual machines by using Azure Backup Reference: https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault https://docs.microsoft.com/en-us/azure/backup/guidance-best-practices 924/951 Q587 · June 30, 2026 925/951

---

## Domanda 588
*Tipo: drag_and_drop · fonte: manual_vision*

You need to configure the alerts for VM1 and VM2 to meet the technical requirements. Which three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.

**Risposta corretta:** 1. Create a Log Analytics workspace. -> 2. Collect Windows performance counters from the Log Analytics agents. -> 3. Create an alert rule.
> Immagini: q588_post0.png

**Spiegazione:** Q588 · June 30, 2026 926/951

---

## Domanda 589
*Tipo: hotspot · fonte: manual_vision*

You need to ensure that User1 can create initiative definitions, and User4 can assign initiatives to RG2. The solution must meet the technical requirements. Which role should you assign to each user? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** User1 -> Resource Policy Contributor for Sub1 | User4 -> Resource Policy Contributor for RG2
> Immagini: q589_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/governance/policy/overview 927/951 Q589 · June 30, 2026 928/951

---

## Domanda 590
*Tipo: multiple_choice · fonte: text_layer*

You need to ensure that you can grant Group4 Azure RBAC read only permissions to all the Azure file shares. What should you do?

- **A.** On storage2, enable identity-based access for the file shares. **← CORRETTA**
- **B.** Recreate storage2 and set Hierarchical namespace to Enabled.
- **C.** On storage1 and storage4, change the Account kind type to StorageV2 (general purpose v2).
- **D.** Create a shared access signature (SAS) for storage1, storage2, and storage4.

**Risposta corretta:** A

**Spiegazione:** To grant Group4 Azure RBAC read-only permissions to all the Azure file shares, you should enable identity-based access for the file shares on storage2. Identity-based access enables you to manage access to file shares based on Azure AD identities, including users, groups, and service principals. This allows you to centrally manage access control from Azure AD and provide the necessary read-only permissions to Group4. Recreating storage2 with Hierarchical namespace enabled, changing the account kind type to StorageV2, or creating a shared access signature are not relevant or sufficient to achieve the desired outcome. Q590 · June 30, 2026 929/951

---

## Domanda 591
*Tipo: multiple_choice · fonte: text_layer*

You need to implement a backup solution for App1 after the application is moved. What should you create first?

- **A.** a recovery plan
- **B.** an Azure Backup Server
- **C.** a backup policy
- **D.** a Recovery Services vault **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** A Recovery Services vault is a logical container that stores the backup data for each protected resource, such as Azure VMs. When the backup job for a protected resource runs, it creates a recovery point inside the Recovery Services vault. It is essential to create this vault first because it is required to store backup data and recovery points for the virtual machines in App1 once they are moved to Azure. Subsequent steps would involve setting up backup policies and other configurations within the Recovery Services vault. Q591 · June 30, 2026 930/951

---

## Domanda 592
*Tipo: multiple_choice · fonte: text_layer*

You need to move the blueprint files to Azure. What should you do?

- **A.** Generate an access key. Map a drive, and then copy the files by using File Explorer.
- **B.** Use Azure Storage Explorer to copy the files. **← CORRETTA**
- **C.** Use the Azure Import/Export service.
- **D.** Generate a shared access signature (SAS). Map a drive, and then copy the files by using File Explorer.

**Risposta corretta:** B

**Spiegazione:** To efficiently move blueprint files to Azure, Azure Storage Explorer is the most suitable tool. It is a free tool from Microsoft that allows users to work with Azure Storage data and provides a user- friendly interface for both uploading and downloading data to Azure Blob storage. This method supports transferring files over the internet, aligning with the technical requirement of copying files to Azure over the internet. Furthermore, Azure Storage Explorer minimizes administrative effort, making it a straightforward and effective solution for transferring files compared to other options. Q592 · June 30, 2026 931/951

---

## Domanda 593
*Tipo: hotspot_yes_no · fonte: manual_vision*

You need to identify the storage requirements for Contoso. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Contoso requires a storage account that supports Blob storage. -> Yes | Contoso requires a storage account that supports Azure Table storage. -> No | Contoso requires a storage account that supports Azure File Storage. -> No
> Immagini: q593_post0.png

**Spiegazione:** Box 1: Yes - Contoso is moving the existing product blueprint files to Azure Blob storage. Use unmanaged standard storage for the hard disks of the virtual machines. We use Page Blobs for these. Box 2: No - Box 3: No 932/951 Q593 · June 30, 2026 933/951

---

## Domanda 594
*Tipo: hotspot · fonte: manual_vision*

You need to create container1 and share1. Which storage accounts should you use for each resource? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** container1 -> storage2 and storage3 only | share1 -> storage2 only
> Immagini: q594_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview 934/951 Q594 · June 30, 2026 935/951

---

## Domanda 595
*Tipo: hotspot · fonte: manual_vision*

You need to create storage5. The solution must support the planned changes. Which type of storage account should you use, and which account should you configure as the destination storage account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Account kind -> StorageV2 (general purpose v2) | Destination -> Storage2
> Immagini: q595_post0.png

**Spiegazione:** Reference: https://docs.microsoft.com/en-us/azure/storage/blobs/object-replication-configure?tabs=portal 936/951 Q595 · June 30, 2026 937/951

---

## Domanda 596
*Tipo: multiple_choice · fonte: text_layer*

You need to identify which storage account to use for the flow logging of IP traffic from VM5. The solution must meet the retention requirements. Which storage account should you identify?

- **A.** storage1
- **B.** storage2 **← CORRETTA**
- **C.** storage3
- **D.** storage4

**Risposta corretta:** B

**Spiegazione:** The storage account identified for flow logging of IP traffic must support a retention period of up to eight months. General Purpose v2 (GPv2) storage accounts are the only type that supports such retention policies. Storage2, being a GPv2 account, meets this requirement. Therefore, Storage2 is the correct choice. Q596 · June 30, 2026 938/951

---

## Domanda 597
*Tipo: multiple_choice · fonte: text_layer*

You discover that VM3 does NOT meet the technical requirements. You need to verify whether the issue relates to the NSGs. What should you use?

- **A.** Diagram in VNet1
- **B.** Diagnostic settings in Azure Monitor
- **C.** Diagnose and solve problems in Traffic Manager profiles
- **D.** The security recommendations in Azure Advisor
- **E.** IP flow verify in Azure Network Watcher **← CORRETTA**

**Risposta corretta:** E

**Spiegazione:** IP flow verify in Azure Network Watcher is the tool to use to verify whether an issue relates to Network Security Groups (NSGs). This feature allows you to check if packets are allowed or denied to or from a virtual machine, including details on direction, protocol, local and remote IP addresses, and port numbers. By doing so, it identifies any NSG rules that might be blocking the desired traffic, providing a comprehensive analysis of the connectivity issue. Q597 · June 30, 2026 939/951

---

## Domanda 598
*Tipo: multiple_choice · fonte: text_layer*

You need to ensure that VM1 can communicate with VM4. The solution must minimize the administrative effort. What should you do?

- **A.** Create an NSG and associate the NSG to VM1 and VM4.
- **B.** Establish peering between VNET1 and VNET3. **← CORRETTA**
- **C.** Assign VM4 an IP address of 10.0.1.5/24.
- **D.** Create a user-defined route from VNET1 to VNET3.

**Risposta corretta:** B

**Spiegazione:** To ensure VM1 can communicate with VM4 while minimizing administrative effort, the best solution is to establish peering between VNET1 and VNET3. Virtual network (VNet) peering allows direct connectivity between two VNets, enabling resources in either VNet to communicate with each other as if they were part of the same network. This method requires minimal configuration and maintenance compared to other options. Creating a network security group (NSG), assigning a specific IP address, or setting up a user-defined route would involve more complexity and administrative overhead. Thus, VNet peering is the most efficient and straightforward solution. Q598 · June 30, 2026 940/951

---

## Domanda 599
*Tipo: hotspot · fonte: manual_vision*

You need to meet the connection requirements for the New York office. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** From the Azure portal -> Create a virtual network gateway and a local network gateway. | In the New York office -> Configure a site-to-site VPN connection.
> Immagini: q599_post0.png, q599_post1.png

**Spiegazione:** Box 1: Create a virtual network gateway and a local network gateway. Azure VPN gateway. The VPN gateway service enables you to connect the VNet to the on-premises network through a VPN appliance. For more information, see Connect an on-premises network to a Microsoft Azure virtual network. The VPN gateway includes the following elements: ✑ Virtual network gateway. A resource that provides a virtual VPN appliance for the VNet. It is responsible for routing traffic from the on-premises network to the VNet. ✑ Local network gateway. An abstraction of the on-premises VPN appliance. Network traffic from the cloud application to the on-premises network is routed through this gateway. ✑ Connection. The connection has properties that specify the connection type (IPSec) and the key shared with the on-premises VPN appliance to encrypt traffic. 941/951 ✑ Gateway subnet. The virtual network gateway is held in its own subnet, which is subject to various requirements, described in the Recommendations section below. Box 2: Configure a site-to-site VPN connection On premises create a site-to-site connection for the virtual network gateway and the local network gateway. Scenario: Connect the New York office to VNet1 over the Internet by using an encrypted connection. Incorrect Answers: Azure ExpressRoute: Established between your network and Azure, through an ExpressRoute partner. This connection is private. Traffic does not go over the internet. Reference: https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/vpn 942/951 Q599 · June 30, 2026 943/951

---

## Domanda 600
*Tipo: hotspot · fonte: manual_vision*

You need to recommend a solution for App1. The solution must meet the technical requirements. What should you include in the recommendation? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Number of virtual networks -> 1 | Number of subnets per virtual network -> 3
> Immagini: q600_post0.png, q600_post1.png

**Spiegazione:** This reference architecture shows how to deploy VMs and a virtual network configured for an N-tier application, using SQL Server on Windows for the data tier. 944/951 Scenario: You have a public-facing application named App1. App1 is comprised of the following three tiers: ✑ A SQL database ✑ A web front end ✑ A processing middle tier Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only. Technical requirements include: ✑ Move all the virtual machines for App1 to Azure. ✑ Minimize the number of open ports between the App1 tiers. Reference: https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/n-tier/n-tier-sql-server 945/951 Q600 · June 30, 2026

---

## Domanda 601
*Tipo: multiple_choice · fonte: text_layer*

You are planning the move of App1 to Azure. You create a network security group (NSG). You need to recommend a solution to provide users with access to App1. What should you recommend?

- **A.** Create an incoming security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers. **← CORRETTA**
- **B.** Create an outgoing security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers.
- **C.** Create an incoming security rule for port 443 from the Internet. Associate the NSG to all the subnets.
- **D.** Create an outgoing security rule for port 443 from the Internet. Associate the NSG to all the subnets.

**Risposta corretta:** A

**Spiegazione:** To provide users with access to App1, it is necessary to allow incoming traffic on port 443, which is used for HTTPS, as users access the web front end of the application via HTTPS only. This requires creating an incoming security rule for port 443. The Network Security Group (NSG) should be associated with the subnet that contains the web servers to ensure that traffic is correctly filtered and directed only to the appropriate servers. Associating the NSG to only the relevant subnet prevents unnecessary exposure of other subnets. Q601 · June 30, 2026 946/951

---

## Domanda 602
*Tipo: hotspot_yes_no · fonte: manual_vision*

You implement the planned changes for NSG1 and NSG2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.

**Risposta corretta:** From VM1, you can establish a Remote Desktop session to VM2. -> Yes | From VM2, you can ping VM3. -> Yes | From VM2, you can establish a Remote Desktop session to VM3. -> No
> Immagini: q602_post0.png

**Spiegazione:** Q602 · June 30, 2026 947/951

---

## Domanda 603
*Tipo: multiple_choice · fonte: text_layer*

You need to add VM1 and VM2 to the backend pool of LB1. What should you do first?

- **A.** Connect VM2 to VNET1/Subnet1.
- **B.** Redeploy VM1 and VM2 to the same availability zone.
- **C.** Redeploy VM1 and VM2 to the same availability set. **← CORRETTA**
- **D.** Create a new NSG and associate the NSG to VNET1/Subnet1.

**Risposta corretta:** C

**Spiegazione:** To add VM1 and VM2 to the backend pool of a Basic Azure Load Balancer, the virtual machines must be part of the same availability set or virtual machine scale set. This is because a Basic Load Balancer does not support load balancing between standalone VMs. Therefore, the first step should be to redeploy VM1 and VM2 to the same availability set. Q603 · June 30, 2026 948/951

---

## Domanda 604
*Tipo: multiple_choice · fonte: text_layer*

You need to ensure that VM1 can communicate with VM4. The solution must minimize administrative effort. What should you do?

- **A.** Create a user-defined route from VNET1 to VNET3.
- **B.** Create an NSG and associate the NSG to VM1 and VM4.
- **C.** Assign VM4 an IP address of 10.0.1.5/24.
- **D.** Establish peering between VNET1 and VNET3. **← CORRETTA**

**Risposta corretta:** D

**Spiegazione:** To ensure VM1 can communicate with VM4, the most straightforward solution that minimizes administrative effort is to establish peering between VNET1 and VNET3. VNet peering allows for direct communication between virtual networks using the Azure backbone, removing the need for additional configurations such as user-defined routes or network security groups. This makes it the most efficient solution. Q604 · June 30, 2026 949/951

---

## Domanda 605
*Tipo: hotspot · fonte: manual_vision*

You need to implement Role1. Which command should you run before you create Role1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.

**Risposta corretta:** Cmdlet (box 1) -> Get-AzRoleDefinition | Box 2 (dopo -Name "Reader" |) -> ConvertTo-Json
> Nota: Comando: Get-AzRoleDefinition -Name "Reader" | ConvertTo-Json
> Immagini: q605_post0.png

**Spiegazione:** Q605 · June 30, 2026 950/951

---

## Domanda 606
*Tipo: multiple_choice · fonte: text_layer*

You need to recommend a solution to automate the configuration for the finance department users. The solution must meet the technical requirements. What should you include in the recommendation?

- **A.** Azure AD B2C
- **B.** dynamic groups and conditional access policies **← CORRETTA**
- **C.** Azure AD Identity Protection
- **D.** an Azure logic app and the Microsoft Identity Management (MIM) client

**Risposta corretta:** B

**Spiegazione:** To automate the configuration for finance department users and meet the technical requirements, the best solution is to use dynamic groups and conditional access policies. Dynamic groups automatically manage group memberships based on user attributes, ensuring that finance department users are correctly identified. Conditional access policies can then be applied to enforce specific requirements, such as Azure Multi-Factor Authentication (MFA), for these users. This approach leverages Azure Active Directory's capabilities to provide a seamless and automated solution tailored to the finance department's needs. Q606 · June 30, 2026 951/951

---
