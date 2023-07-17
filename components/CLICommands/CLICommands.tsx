import React from "react";

// components/CLICommands.js
// components/CLICommands.js
const CLICommands = () => {
    const commands = [
        {
          name: 'terraform init',
          description: 'Initialize a new or existing Terraform working directory.',
          flags: [
            '-backend-config=path',
            '-force-copy',
            '-get-plugins=true',
            '-input=true',
            '-lock=true',
            '-lock-timeout=0s',
            '-no-color',
            '-plugin-dir=path',
            '-reconfigure',
            '-upgrade=false',
          ],
        },
        {
          name: 'terraform plan',
          description: 'Generate and show an execution plan for Terraform.',
          flags: [
            '-compact-warnings',
            '-destroy',
            '-detailed-exitcode',
            '-input=true',
            '-lock=true',
            '-lock-timeout=0s',
            '-no-color',
            '-out=path',
            '-parallelism=n',
            '-refresh=true',
            '-state=path',
            '-target=resource',
            '-var="foo=bar"',
            '-var-file=foo.tfvars',
          ],
        },
        {
          name: 'terraform apply',
          description: 'Apply the changes to achieve the desired state.',
          flags: [
            '-auto-approve=false',
            '-compact-warnings',
            '-input=true',
            '-lock=true',
            '-lock-timeout=0s',
            '-no-color',
            '-parallelism=n',
            '-refresh=true',
            '-state=path',
            '-state-out=path',
            '-target=resource',
            '--replace=resource.address[instance index]',
          ],
        },
        {
          name: 'terraform destroy',
          description: 'Destroy Terraform-managed infrastructure.',
          flags: [
            '--replace=resource.address[instance index]',
          ],
        },
        {
          name: 'terraform show',
          description: 'Inspect Terraform state or plan.',
          flags: [
              '--json',
              '--no-color',
              'planfile'
              ],
        },
        {
          name: 'terraform validate',
          description: 'Check whether the configuration is valid.',
        },
        {
          name: 'terraform console',
          description: 'Try Terraform expressions at an interactive command prompt.',
        },
        {
          name: 'terraform fmt',
          description: 'Reformat your configuration in the standard style.',
        },
        {
          name: 'terraform force-unlock LOCK_ID [DIR]',
          description:
              'Manually unlock the state for the defined configuration. This will not modify your infrastructure. This command removes the lock on the state for the current configuration. The behavior of this command is equivalent to forcibly removing a lock on a shared resource. Be certain that no one else is accessing or modifying the state at the same time, or data loss could occur.',
        },
        {
          name: 'terraform get [options] [DIR]',
          description:
              'Download and update modules mentioned in the root module. By default, get downloads and installs modules into a subdirectory of .terraform in the current working directory. This behavior can be modified with the -update flag.',
        },
        {
          name: 'terraform graph [options] [DIR]',
          description:
              'Create a visual representation of either a configuration or execution plan. The output is in DOT format, which can be used by GraphViz to generate charts.',
        },
        {
          name: 'terraform import [options] ADDR ID ',
          description:
              'Import existing infrastructure into your Terraform state. This will find and import the specified resource into your Terraform state, allowing existing infrastructure to come under Terraform management without having to be initially created by Terraform.',
        },
        {
          name: 'terraform login [hostname]',
          description:
              'Obtain and save an API token for a remote host. If no hostname is provided, the default hostname is app.terraform.io.',
        },
        {
          name: 'terraform logout [hostname]',
          description:
              'Remove locally-stored credentials for a remote host. If no hostname is provided, the default hostname is app.terraform.io.',
        },
      ];
      
      
  
    return (
        <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Terraform CLI Commands</h2>
        <div className="grid gap-4">
          {commands.map((command) => (
            <div key={command.name} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-brown-dark">{command.name}</h3>
              <p className="text-gray-700 mb-2">{command.description}</p>
              {command.flags && command.flags.length > 0 && (
                <ul className="list-disc list-inside text-brown-mid">
                  {command.flags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
  export default CLICommands;
  